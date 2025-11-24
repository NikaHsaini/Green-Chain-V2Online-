@echo off
REM Script pour builder et copier les fichiers à la racine pour GitHub Pages
REM MyCrypto Energy - Green Chain™

echo Building project...
call npx vite build --config vite.config.github.ts

if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)

echo Copying files to root...

REM Copier index.html à la racine
copy dist\index.html .\index.html

REM Copier les dossiers à la racine
if exist dist\assets xcopy /E /I /Y dist\assets .\assets
if exist dist\images xcopy /E /I /Y dist\images .\images
if exist dist\css xcopy /E /I /Y dist\css .\css
if exist dist\js xcopy /E /I /Y dist\js .\js
if exist dist\.nojekyll copy dist\.nojekyll .\.nojekyll

echo.
echo Build complete! Files are now at the root.
echo.
echo Ready for GitHub Pages!
echo   - index.html is at the root
echo   - All assets are copied
echo.
echo Next steps:
echo 1. git add .
echo 2. git commit -m "Deploy to GitHub Pages"
echo 3. git push
echo.

pause
