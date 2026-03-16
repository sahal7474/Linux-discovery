# 🐧 Linux Discovery Tool
A lightweight, full-stack prototype for scanning and managing Linux host inventory via SSH. Built with a Django/uv backend and a React frontend, all wrapped in Docker.

# 🚀 Quick Start (Docker)
To get the whole system running in one command:

Bash
cd Linux-discovery

docker-compose up --build
Frontend: http://localhost:3000

Backend API: http://localhost:8000/api/hosts/

# 🛠 Tech Stack
Backend: Python (Django + uv)

Frontend: React

Automation: Paramiko (SSH)

Storage: SQLite (Saved in a Docker Volume)