@echo off
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
  echo Please install Node.js 22.12+ or Node.js 24 LTS first.
  pause
  exit /b 1
)
if not exist node_modules (
  call npm install
  if errorlevel 1 (
    pause
    exit /b 1
  )
)
echo Open http://127.0.0.1:5173 in your browser.
call npm run dev -- --host 127.0.0.1 --port 5173
pause
