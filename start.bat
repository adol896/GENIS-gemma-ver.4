@echo off
title AI Assistant Genis Launcher

echo ==================================================
echo  Starting AI Assistant Genis...
echo ==================================================
echo.

echo [1/3] Checking VOICEVOX...

:: =================================================================
:: 【VOICEVOX の実行ファイルパス設定】
:: Windows の標準環境変数 %LOCALAPPDATA% (C:\Users\ユーザー名\AppData\Local) を
:: 使用しているため、このままで多くの環境で動作します。
::
:: ■ run.exe や vv-engine.exe の場所の探し方:
:: 1. デスクトップにある VOICEVOX のショートカットアイコンを右クリック
:: 2. 「プロパティ」を開き、「リンク先」欄に表示されているパスを確認
:: 3. リンク先のパスが下記と異なる場合は、VV1 や VV2 のダブルクォーテーション内を
::    ご自身の環境のパスに書き換えて保存してください。
:: =================================================================

set "VV1=%LOCALAPPDATA%\Programs\VOICEVOX\vv-engine\run.exe"
set "VV2=%LOCALAPPDATA%\Programs\VOICEVOX\vv-engine.exe"
set "VV3=C:\Program Files\VOICEVOX\vv-engine\run.exe"
set "VV4=C:\Program Files\VOICEVOX\vv-engine.exe"

:: 順番にファイルの存在を確認し、見つかったパスで CORS 許可フラグ付き起動
if exist "%VV1%" (
    start "" "%VV1%" --cors_policy_mode all
    goto SERVER
)

if exist "%VV2%" (
    start "" "%VV2%" --cors_policy_mode all
    goto SERVER
)

if exist "%VV3%" (
    start "" "%VV3%" --cors_policy_mode all
    goto SERVER
)

if exist "%VV4%" (
    start "" "%VV4%" --cors_policy_mode all
    goto SERVER
)

echo [INFO] VOICEVOX not found in default paths. Continuing...
echo [INFO] デフォルトのパスに VOICEVOX が見つかりませんでした。手動起動するかバッチファイルのパスを編集してください。

:SERVER
timeout /t 3 /nobreak > nul

echo [2/3] Starting Local Web Server (server.py)...
start "Genis Server" cmd /k "python server.py"

timeout /t 2 /nobreak > nul

echo [3/3] Opening Browser...
start http://localhost:8000/index.html

echo.
echo ==================================================
echo  Launch complete!
echo  Please keep the Genis Server window open.
echo ==================================================
pause
