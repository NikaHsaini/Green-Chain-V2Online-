#!/usr/bin/env python3
"""
MyCrypto Energy - Green Chain™ Launcher
Ce script automatise l'installation et le lancement du site web.
"""

import os
import sys
import subprocess
import platform
import time
import webbrowser
from pathlib import Path

class Colors:
    """Couleurs pour le terminal"""
    GREEN = '\033[92m'
    BLUE = '\033[94m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BOLD = '\033[1m'
    END = '\033[0m'

def print_header():
    """Affiche le header du programme"""
    print(f"\n{Colors.BOLD}{Colors.GREEN}{'='*60}{Colors.END}")
    print(f"{Colors.BOLD}{Colors.GREEN}  MyCrypto Energy - Green Chain™{Colors.END}")
    print(f"{Colors.BOLD}{Colors.GREEN}  Launcher Script v1.0{Colors.END}")
    print(f"{Colors.BOLD}{Colors.GREEN}{'='*60}{Colors.END}\n")

def print_step(step_num, message):
    """Affiche une étape du processus"""
    print(f"{Colors.BOLD}{Colors.BLUE}[Étape {step_num}]{Colors.END} {message}")

def print_success(message):
    """Affiche un message de succès"""
    print(f"{Colors.GREEN}✓{Colors.END} {message}")

def print_error(message):
    """Affiche un message d'erreur"""
    print(f"{Colors.RED}✗{Colors.END} {message}")

def print_warning(message):
    """Affiche un message d'avertissement"""
    print(f"{Colors.YELLOW}⚠{Colors.END} {message}")

def check_command(command):
    """Vérifie si une commande est disponible"""
    try:
        subprocess.run([command, "--version"], 
                      stdout=subprocess.DEVNULL, 
                      stderr=subprocess.DEVNULL,
                      check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False

def check_node():
    """Vérifie si Node.js est installé"""
    print_step(1, "Vérification de Node.js...")
    if check_command("node"):
        result = subprocess.run(["node", "--version"], 
                              capture_output=True, 
                              text=True)
        version = result.stdout.strip()
        print_success(f"Node.js trouvé : {version}")
        return True
    else:
        print_error("Node.js n'est pas installé")
        print_warning("Veuillez installer Node.js depuis https://nodejs.org/")
        return False

def check_package_manager():
    """Vérifie quel gestionnaire de paquets est disponible"""
    print_step(2, "Vérification du gestionnaire de paquets...")
    
    if check_command("pnpm"):
        print_success("pnpm trouvé")
        return "pnpm"
    elif check_command("npm"):
        print_success("npm trouvé")
        print_warning("pnpm n'est pas installé.")
        print_warning("Pour installer pnpm globalement, exécutez: sudo npm install -g pnpm")
        print_warning("Utilisation de npm pour cette session...")
        return "npm"
    else:
        print_error("Aucun gestionnaire de paquets trouvé")
        return None

def install_dependencies(package_manager):
    """Installe les dépendances du projet"""
    print_step(3, "Installation des dépendances...")
    
    node_modules = Path("node_modules")
    if node_modules.exists():
        print_warning("node_modules existe déjà, réinstallation...")
    
    try:
        print(f"Exécution de {package_manager} install...")
        
        # Pour npm, utiliser --legacy-peer-deps pour éviter les conflits
        if package_manager == "npm":
            subprocess.run([package_manager, "install", "--legacy-peer-deps"], check=True)
        else:
            subprocess.run([package_manager, "install"], check=True)
            
        print_success("Dépendances installées avec succès")
        return True
    except subprocess.CalledProcessError as e:
        print_error(f"Erreur lors de l'installation des dépendances: {e}")
        
        # Essayer avec --force si --legacy-peer-deps échoue
        if package_manager == "npm":
            print_warning("Nouvelle tentative avec --force...")
            try:
                subprocess.run([package_manager, "install", "--force"], check=True)
                print_success("Dépendances installées avec succès (avec --force)")
                return True
            except subprocess.CalledProcessError:
                print_error("Échec de l'installation même avec --force")
        
        return False

def start_dev_server(package_manager):
    """Démarre le serveur de développement"""
    print_step(4, "Démarrage du serveur de développement...")
    
    try:
        print_success("Serveur démarré sur http://localhost:3000")
        print(f"\n{Colors.BOLD}{Colors.GREEN}Le site va s'ouvrir dans votre navigateur...{Colors.END}")
        print(f"{Colors.YELLOW}Appuyez sur Ctrl+C pour arrêter le serveur{Colors.END}\n")
        
        # Ouvrir le navigateur après 3 secondes
        def open_browser():
            time.sleep(3)
            webbrowser.open("http://localhost:3000")
        
        import threading
        browser_thread = threading.Thread(target=open_browser)
        browser_thread.daemon = True
        browser_thread.start()
        
        # Démarrer le serveur
        subprocess.run([package_manager, "dev"], check=True)
        
    except KeyboardInterrupt:
        print(f"\n\n{Colors.YELLOW}Arrêt du serveur...{Colors.END}")
        print_success("Serveur arrêté")
    except subprocess.CalledProcessError as e:
        print_error(f"Erreur lors du démarrage du serveur: {e}")
        return False
    
    return True

def main():
    """Fonction principale"""
    print_header()
    
    # Vérifier que nous sommes dans le bon répertoire
    if not Path("package.json").exists():
        print_error("Erreur: package.json non trouvé")
        print_warning("Assurez-vous d'exécuter ce script depuis le répertoire du projet")
        sys.exit(1)
    
    # Vérifier Node.js
    if not check_node():
        sys.exit(1)
    
    # Vérifier le gestionnaire de paquets
    package_manager = check_package_manager()
    if not package_manager:
        sys.exit(1)
    
    # Installer les dépendances
    if not install_dependencies(package_manager):
        sys.exit(1)
    
    # Démarrer le serveur
    start_dev_server(package_manager)
    
    print(f"\n{Colors.BOLD}{Colors.GREEN}Merci d'avoir utilisé MyCrypto Energy - Green Chain™{Colors.END}\n")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print_error(f"Erreur inattendue: {e}")
        sys.exit(1)
