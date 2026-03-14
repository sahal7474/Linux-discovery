# Linux Discovery Tool

This tool connects to Linux servers via SSH to collect hardware and OS information.

## 🛠️ Setup Instructions

1. **Install dependencies:**
   `uv sync`

2. **Setup the database:**
   `uv run python manage.py migrate`

3. **Start the backend server:**
   `uv run python manage.py runserver`

## 🔌 API Quick Start
- **View Hosts:** http://127.0.0.1:8000/api/hosts/
- **Scan a Host:** http://127.0.0.1:8000/api/hosts/1/run_discovery/
