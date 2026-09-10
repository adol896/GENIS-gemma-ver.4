@echo off
chcp 65001 > nul
title AI Genis 起動スクリプト

echo ==================================================
echo  AI Assistant Genis 起動処理を開始します
echo ==================================================
echo.

:: 1. VOICEVOX の起動 (--cors_policy_mode all 付き)
echo [1/3] VOICEVOX を起動中...
set VOICEVOX_PATH="C:\Program Files\VOICEVOX\vv-engine.exe"

if exist %VOICEVOX_PATH% (
    start "" %VOICEVOX_PATH% --cors_policy_mode all
) else (
    echo [情報] 標準パスにVOICEVOXが見つかりません。
    echo 既に起動しているか、別フォルダにある場合はそのまま進行します。
)

:: 起動待ち（3秒）
timeout /t 3 /nobreak > nul

:: 2. Python PNAサーバー(server.py) の起動
echo [2/3] ローカルWebサーバー (server.py) を起動中...
start "Genis Server" cmd /k "python server.py"

:: サーバー準備待ち（2秒）
timeout /t 2 /nobreak > nul

:: 3. ブラウザで起動
echo [3/3] ブラウザを開きます...
start http://localhost:8000/index.html

echo.
echo ==================================================
echo  起動処理が完了しました！
echo  (黒いサーバーウィンドウは閉じずにそのままご使用ください)
echo ==================================================
pause
