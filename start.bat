@echo off
cd /d "%~dp0"
echo PDF Signer - http://localhost:4578
echo Tekan Ctrl+C untuk berhenti.
start "" http://localhost:4578
python -m http.server 4578
pause
