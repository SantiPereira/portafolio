@echo off
setlocal enabledelayedexpansion

:: Definir rutas de los proyectos
set folder1=C:\Users\do\Desktop\miPortafolio\00-home
set folder2=C:\Users\do\Desktop\miPortafolio\03-conecta4

:: Menú principal
:menu
cls
echo =========================================
echo   Administrador de Servidores Vite
echo =========================================
echo [1] Iniciar servidores
echo [2] Detener servidores
echo [3] Salir
echo =========================================
set /p opcion=Selecciona una opción: 

if "%opcion%"=="1" goto iniciar_servidores
if "%opcion%"=="2" goto detener_servidores
if "%opcion%"=="3" exit
goto menu

:: Iniciar servidores
:iniciar_servidores
echo Iniciando los servidores en segundo plano...

:: Ejecutar servidores y filtrar la salida
start /B cmd /c "cd /d %folder1% && npm run dev | findstr /R /C:"VITE v" /C:"Local:""
start /B cmd /c "cd /d %folder2% && npm run dev | findstr /R /C:"VITE v" /C:"Local:""

echo.
echo =============================
echo  Servidores iniciados en:
echo =============================
echo 00-home: http://localhost:5174
echo 03-conecta4: http://localhost:5175
echo =============================
pause
goto menu

:: Detener servidores
:detener_servidores
echo Deteniendo servidores...

:: Buscar procesos de Vite y cerrarlos
for /f "tokens=2 delims=," %%A in ('tasklist /FI "IMAGENAME eq node.exe" /FO CSV ^| find /I "node"') do (
    taskkill /PID %%A /F
)

echo Servidores detenidos.
pause
goto menu
