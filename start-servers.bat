@echo off
echo Starting Login Application servers...

echo Starting backend server...
start "Backend Server" cmd /k "cd backend && npm start"

timeout /t 3 /nobreak >nul

echo Starting frontend server...
start "Frontend Server" cmd /k "cd frontend && npm start"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo The application will open automatically in your default browser.
timeout /t 5 /nobreak >nul
start http://localhost:3000

echo Press any key to stop all servers...
pause >nul

echo Stopping servers...
taskkill /f /im node.exe
echo Servers stopped.
