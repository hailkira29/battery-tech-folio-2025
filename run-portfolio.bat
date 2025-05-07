@echo off
title Battery Tech Portfolio

echo Starting Battery Tech Portfolio...
echo ======================================

:: Use absolute paths for Node.js
set NODE_EXE="C:\Program Files\nodejs\node.exe"
set VITE_SCRIPT="%~dp0node_modules\vite\bin\vite.js"

:: Display which files we're using
echo Using Node.js: %NODE_EXE%
echo Using Vite script: %VITE_SCRIPT%
echo.

:: Start the development server
echo Starting portfolio at http://localhost:8080...
%NODE_EXE% %VITE_SCRIPT% --port 8080 --host localhost

:: Keep the window open if there's an error
if %ERRORLEVEL% neq 0 (
    echo.
    echo ERROR: Failed to start the server. Check the error messages above.
    pause
) 