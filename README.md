# Final_Project

# FastAPI Calculator App

This project is a FastAPI-based calculator application with user authentication, profile management, and calculation CRUD operations. It includes automated tests, Docker configuration, and Redis-based token blacklisting.

---

## Features

- User registration, login, and password management
- JWT authentication with Redis-based token blacklist
- CRUD operations for calculations (addition, subtraction, multiplication, division)
- Profile update
- End-to-end and integration tests using pytest
- Dockerized for easy deployment

---

## Requirements

- Python 3.12
- PostgreSQL
- Redis
- Docker (optional for containerized deployment)
- Node.js (if using Playwright for E2E tests)

Python dependencies are listed in `requirements.txt`.

---

## Running the Application Locally

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd <repo-folder>

2. **Create a virtual environment**

python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

3. **Install dependencies**

pip install -r requirements.txt

4. **Initialize the database**

python-m app.database_init

5. **Run the FastAPI app**

uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

6. **Access the app in your browser**

API docs: http://localhost:8000/docs
Application pages: http://localhost:8000/

---

## Running Tests

1. **Unit and Integration tests**

pytest -v

2. **End-to-end tests (with Playwright)**

pytest tests/e2e -v

---

## Docker Deployment

1. **Build the Docker image**

docker compose up --build

---

## Docker Repository Link

https://hub.docker.com/repository/docker/domsil12/final_project/general