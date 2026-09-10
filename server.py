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
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        super().end_headers()

    def do_OPTIONS(self):
        # Chromeからの事前確認（プリフライトリクエスト）に対して204を返す
        self.send_response(204)
        self.end_headers()


def check_index_html_pna(file_path):
    """index.html内に targetAddressSpace: 'local' が記述されているか確認する"""
    if not os.path.exists(file_path):
        return

    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        if "targetAddressSpace" in content:
            print(f"[PNA Check] {file_path} に targetAddressSpace 設定を確認しました。")
        else:
            print(f"[PNA Check 警告] {file_path} 内に targetAddressSpace の記述が見つかりません。")
            print("  ChromeでのVOICEVOX接続時にPNAエラーが発生する可能性があります。")
    except Exception as e:
        print(f"[警告] {file_path} の自動チェックをスキップしました: {e}")


if __name__ == "__main__":
    # index.html の記法チェック
    check_index_html_pna(HTML_FILENAME)

    # サーバーの立ち上げ
    server_address = ("", PORT)
    httpd = http.server.HTTPServer(server_address, PNAHTTPRequestHandler)

    print("=" * 60)
    print(f" 🚀 PNA対応ローカルWebサーバー起動完了: http://localhost:{PORT}/{HTML_FILENAME}")
    print("=" * 60)
    print(" 停止するには Ctrl+C を押してください。\n")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nサーバーを停止しました。")
        sys.exit(0)
