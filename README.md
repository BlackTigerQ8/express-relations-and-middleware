# Express Relations & Middleware Workshop

This repository contains the class materials for learning how to implement Data Relationships (One-to-One, One-to-Many) and Middleware in an Express.js application.

---

## 📂 Repository Branches

There are two main branches in this repository. Choose the one that matches your current goal:

| Branch Name     | Description         | When to use                                                                                           |
| :-------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| `start-project` | The initial setup.  | Use this to start the class. It contains the basic server setup but no relations or middleware logic. |
| `main`          | The completed code. | Use this for reference. It contains the final solution with all features implemented.                 |

---

## 🚀 Getting Started

### Option A: Start from Scratch (Recommended)

If you are following along with the lecture, clone the starter branch:

```bash
# 1. Clone the specific starter branch
git clone -b start-project https://github.com/BlackTigerQ8/express-relations-and-middleware.git

# 2. Enter the project folder
cd express-relations-and-middleware

# 3. Install dependencies
npm install

# 4. Start the server
npm run start
```

### Option B: View the Completed Solution

If you missed the class or want to review the final code:

```bash
# 1. Clone the main branch
git clone -b main https://github.com/BlackTigerQ8/express-relations-and-middleware.git

# 2. Enter the project folder
cd express-relations-and-middleware

# 3. Install dependencies
npm install
```

---

## ⚙️ Configuration

1. Create a new `.env` file in the root directory.

2. Add the following variables (adjust values as needed):

```env
PORT=8000
MONGO_DB_URL=mongodb+srv://<your-connection-string>
```

---

## 🔄 Switching Branches

If you already cloned the repo and want to switch between the starter and the finished code, use these commands:

Check which branch you are on:

```bash
git branch
```

Switch to the start project:

```bash
git checkout start-project
```

Switch to the final project:

```bash
git checkout main
```

> **Note:** If you have unsaved changes, Git might ask you to commit or stash them before switching.
