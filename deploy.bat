@echo off
echo ================================
echo    TEKNOVA SITE DEPLOY
echo ================================
echo.

:: GitHub'a push yap
echo [1/3] GitHub'a push yapiliyor...
git add .
git commit -m "Site guncellemesi - %date% %time%"
git push origin main

if %errorlevel% neq 0 (
    echo HATA: GitHub push basarisiz!
    pause
    exit /b 1
)

echo GitHub push basarili!
echo.

:: Netlify CLI kontrol et
echo [2/3] Netlify CLI kontrol ediliyor...
netlify --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Netlify CLI bulunamadi. Kuruluyor...
    npm install -g netlify-cli
    if %errorlevel% neq 0 (
        echo HATA: Netlify CLI kurulumu basarisiz!
        echo Lutfen once Node.js yukleyin: https://nodejs.org
        pause
        exit /b 1
    )
)

echo Netlify CLI hazir!
echo.

:: Netlify'a deploy et
echo [3/3] Netlify'a deploy ediliyor...
netlify deploy --prod --dir .

if %errorlevel% neq 0 (
    echo HATA: Netlify deploy basarisiz!
    echo.
    echo Ilk kullanimda 'netlify login' ve 'netlify init' komutlarini calistirin.
    pause
    exit /b 1
)

echo.
echo ================================
echo   DEPLOY BASARILI! 
echo ================================
echo.
echo Siteniz Netlify'da yayinlandi!
echo.
pause 