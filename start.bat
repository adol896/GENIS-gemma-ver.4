@echo off
title AI Assistant Genis Launcher

echo ==================================================
echo  Starting AI Assistant Genis...
echo ==================================================
echo.

echo [1/3] Checking VOICEVOX...
set "VV1=C:\Program Files\VOICEVOX\vv-engine.exe"
set "VV2=%LOCALAPPDATA%\Programs\VOICEVOX\vv-engine.exe"

if exist "%VV1%" (
    start "" "%VV1%" --cors_policy_mode all
    goto SERVER
)

if exist "%VV2%" (
    start "" "%VV2%" --cors_policy_mode all
    goto SERVER
)

echo [INFO] VOICEVOX not found in default paths. Continuing...

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