@echo off
echo Setting up Login Application...

echo Installing backend dependencies...
cd backend
npm install
if %errorlevel% neq 0 (
    echo Backend installation failed!
    echo Please run: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    echo Then run this script again.
    pause
    exit /b 1
)

echo.
echo Installing frontend dependencies...
cd ../frontend
npm install
if %errorlevel% neq 0 (
    echo Frontend installation failed!
    echo Please run: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    echo Then run this script again.
    pause
    exit /b 1
)

echo.
echo Installing axios for frontend...
npm install axios
if %errorlevel% neq 0 (
    echo Axios installation failed!
    echo Please run: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    echo Then run this script again.
    pause
    exit /b 1
)

echo.
echo Setup completed successfully!
echo.
echo To run the application:
echo 1. Start backend: cd backend && npm start
echo 2. Start frontend: cd frontend && npm start
echo.
echo Then open http://localhost:3000 in your browser
pause
