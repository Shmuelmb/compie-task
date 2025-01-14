# Compie Task

### Stack

- **Frontend:** Vue 3 with TypeScript
- **Backend:** Node.js with Express and TypeScript
- **Database:** PostgreSQL managed with Prisma ORM

---

## Project Structure

```
├───backend
│   └───src
│       ├───api
│       │   ├───constants
│       │   ├───controllers
│       │   ├───lib
│       │   ├───routes
│       │   ├───services
│       │   ├───status
│       │   ├───types
│       │   ├───utils
│       │   └───validations
│       ├───config
│       └───prisma
├───db
│   ├───docker-compose.yml
└───frontend
    ├───.vscode
    ├───public
    └───src
        ├───api
        ├───components
        ├───router
        ├───utils
        └───views
```

---

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (use the correct version with `nvm`)
- Docker and Docker Compose
- A PostgreSQL database client (optional, for manual database inspection)

---

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Shmuelmb/compie-task.git
cd compie-task
```

### 2. Set the Node Version

```bash
nvm use
```

### 3. Install Dependencies

Navigate to the **backend** and **frontend** directories and install dependencies:

```bash
cd backend
npm install
cd ../frontend
npm install
```

### 4. Set Up the Database

Navigate to the `db` directory and start the database using Docker Compose:

```bash
cd ../db
docker-compose up -d
```

### 5. Create an Environment File

Create a `.env` file in the **backend** directory and add the environment from `.env.example` file.

```bash
cp backend/.env.example backend/.env
```

### 6. Seed the Database

Navigate to the **backend** folder and run the bootstrap script:

```bash
cd ../backend
npm run bootstrap
```

### 7. Start the Application

Navigate back to the root folder and run the following script to start all services:

```bash
./run_all.sh
```

---
