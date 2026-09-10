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


if __name__ == "__main__":
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
