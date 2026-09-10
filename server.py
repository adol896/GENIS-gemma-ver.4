import http.server
import os
import sys

# サーバー設定
PORT = 8000
HTML_FILENAME = "index.html"


class PNAHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Chrome Private Network Access (PNA) 対応 開発用ローカルHTTPサーバー"""

    def end_headers(self):
        # PNAおよびCORSを許可するヘッダーを追加
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Private-Network", "true")
        self.send_header(
            "Access-Control-Allow-Methods", "GET, POST, OPTIONS"
        )
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        # Chromeからの事前確認（プリフライトリクエスト）に対して204を返す
        self.send_response(204)
        self.end_headers()


def patch_index_html(file_path):
    """index.html内のfetch処理に targetAddressSpace: 'local' が無ければ自動追加する"""
    if not os.path.exists(file_path):
        return

    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # 旧コードパターン
        old_query = "fetch(`${VOICEVOX_HOST}/audio_query?speaker=${VOICEVOX_SPEAKER_ID}&text=${encodeURIComponent(text)}`, { method: 'POST' });"
        old_synth = "const synthRes = await fetch(`${VOICEVOX_HOST}/synthesis?speaker=${VOICEVOX_SPEAKER_ID}`, {\n          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(queryData)\n        });"

        # PNA対応版コードパターン
        new_query = "fetch(`${VOICEVOX_HOST}/audio_query?speaker=${VOICEVOX_SPEAKER_ID}&text=${encodeURIComponent(text)}`, {\n          method: 'POST',\n          targetAddressSpace: 'local'\n        });"
        new_synth = "const synthRes = await fetch(`${VOICEVOX_HOST}/synthesis?speaker=${VOICEVOX_SPEAKER_ID}`, {\n          method: 'POST',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify(queryData),\n          targetAddressSpace: 'local'\n        });"

        if old_query in content or old_synth in content:
            updated_content = content.replace(old_query, new_query).replace(
                old_synth, new_synth
            )
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(updated_content)
            print(
                f"[自動補正] {file_path} 内のfetchをPNA対応版に更新しました。"
            )
    except Exception as e:
        print(f"[警告] {file_path} の自動チェックをスキップしました: {e}")


if __name__ == "__main__":
    # index.html の記法チェック
    patch_index_html(HTML_FILENAME)

    # サーバーの立ち上げ
    server_address = ("", PORT)
    httpd = http.server.HTTPServer(server_address, PNAHTTPRequestHandler)

    print("=" * 50)
    print(
        f" 🚀 PNA対応ローカルサーバー起動完了: http://localhost:{PORT}/{HTML_FILENAME}"
    )
    print("=" * 50)
    print(" 停止するには Ctrl+C を押してください。\n")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nサーバーを停止しました。")
        sys.exit(0)
