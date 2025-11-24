@echo off
REM Script de déploiement automatique pour GitHub (Windows)
REM MyCrypto Energy - Green Chain™

setlocal enabledelayedexpansion

echo ============================================================
echo   MyCrypto Energy - Green Chain™
echo   Script de Déploiement GitHub (Windows)
echo ============================================================
echo.

REM Vérifier si Git est installé
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Git n'est pas installé
    echo Veuillez installer Git depuis https://git-scm.com/
    pause
    exit /b 1
)

echo [OK] Git trouvé
echo.

REM Vérifier si c'est déjà un dépôt Git
if not exist .git (
    echo [Étape 1] Initialisation du dépôt Git...
    git init
    git branch -M main
    echo [OK] Dépôt Git initialisé
    echo.
) else (
    echo [OK] Dépôt Git déjà initialisé
    echo.
)

REM Vérifier si le dépôt distant est configuré
git remote | findstr /C:"origin" >nul 2>&1
if errorlevel 1 (
    echo [Étape 2] Configuration du dépôt distant
    echo Entrez l'URL de votre dépôt GitHub :
    echo (Format : https://github.com/VOTRE-USERNAME/mcb-greencoin-v3.git)
    set /p REPO_URL="URL : "
    
    if "!REPO_URL!"=="" (
        echo [ERREUR] URL vide, abandon
        pause
        exit /b 1
    )
    
    git remote add origin "!REPO_URL!"
    echo [OK] Dépôt distant configuré
    echo.
) else (
    echo [OK] Dépôt distant déjà configuré
    for /f "tokens=*" %%i in ('git remote get-url origin') do set REPO_URL=%%i
    echo URL : !REPO_URL!
    echo.
)

REM Demander le message de commit
echo [Étape 3] Préparation du commit
echo Entrez un message de commit (ou appuyez sur Entrée pour le message par défaut) :
set /p COMMIT_MSG="Message : "

if "!COMMIT_MSG!"=="" (
    for /f "tokens=*" %%i in ('powershell -Command "Get-Date -Format 'yyyy-MM-dd HH:mm:ss'"') do set TIMESTAMP=%%i
    set COMMIT_MSG=Update: !TIMESTAMP!
)

REM Ajouter tous les fichiers
echo.
echo Ajout des fichiers...
git add .

REM Créer le commit
echo Création du commit...
git commit -m "!COMMIT_MSG!" 2>nul
if errorlevel 1 (
    echo [ATTENTION] Aucun changement à commiter
)

echo [OK] Commit créé
echo.

REM Pousser vers GitHub
echo [Étape 4] Push vers GitHub...
echo Pushing to !REPO_URL!...
echo.

git push -u origin main
if errorlevel 1 (
    echo.
    echo [ERREUR] Erreur lors du push
    echo Vérifiez vos identifiants GitHub et réessayez
    pause
    exit /b 1
)

echo.
echo [OK] Code poussé avec succès !
echo.

REM Extraire le nom d'utilisateur et le nom du dépôt
for /f "tokens=4,5 delims=/" %%a in ("!REPO_URL!") do (
    set USERNAME=%%a
    set REPONAME=%%b
)
set REPONAME=!REPONAME:.git=!

echo ============================================================
echo   Déploiement en cours...
echo ============================================================
echo.
echo Le site sera disponible dans quelques minutes à :
echo https://!USERNAME!.github.io/!REPONAME!/
echo.
echo Vérifiez le statut du déploiement sur :
echo https://github.com/!USERNAME!/!REPONAME!/actions
echo.
echo [OK] Déploiement terminé avec succès !
echo.

pause
