@echo off
echo ================================
echo  NETLIFY ILKSEL KURULUM
echo ================================
echo.

:: Node.js kontrol et
echo Node.js kontrol ediliyor...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo HATA: Node.js bulunamadi!
    echo.
    echo Lutfen once Node.js indirip yukleyin:
    echo https://nodejs.org/en/download/
    echo.
    pause
    exit /b 1
)

echo Node.js mevcut!
echo.

:: Netlify CLI kur
echo Netlify CLI kuruluyor...
npm install -g netlify-cli

if %errorlevel% neq 0 (
    echo HATA: Netlify CLI kurulumu basarisiz!
    pause
    exit /b 1
)

echo Netlify CLI basariyla kuruldu!
echo.

:: Netlify'a giris yap
echo ================================
echo   NETLIFY'A GIRIS YAPIN
echo ================================
echo.
echo Tarayicinizda acilacak sayfa ile Netlify hesabiniza giris yapin...
netlify login

echo.
echo ================================
echo   SITE YAPILANDIRMASI
echo ================================
echo.
echo GitHub repo'nuzu Netlify'a baglayacagiz...
netlify init

echo.
echo ================================
echo    KURULUM TAMAMLANDI!
echo ================================
echo.
echo Artik 'deploy.bat' dosyasini calistirarak sitenizi yayinlayabilirsiniz.
echo.
pause 