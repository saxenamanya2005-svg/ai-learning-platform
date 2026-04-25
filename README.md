# 🎓 AI Smart Learning Platform

> A full-stack AI-powered learning platform where students can login, browse courses, attempt quizzes, and chat with an AI assistant.

![Backend](https://img.shields.io/badge/Backend-Spring%20Boot-green) ![Frontend](https://img.shields.io/badge/Frontend-React.js-blue) ![Database](https://img.shields.io/badge/Database-MySQL-orange) ![AI](https://img.shields.io/badge/AI-Groq%20API-purple)

--- 

## 🚀 Features
- 🔐 **User Authentication** — Register & Login
- 📚 **Course Browsing** — View all available courses
- 📝 **Quiz System** — MCQ quizzes with instant score
- 🤖 **AI Chatbot** — Ask doubts to AI *(Coming Soon)*
- 📊 **Score Tracking** — Track quiz performance

---

## 💻 Prerequisites — What to Install

| Tool | Download Link | Why Needed |
|------|--------------|------------|
| Java JDK 17+ | https://www.oracle.com/java/technologies/downloads/ | Run Spring Boot |
| VS Code | https://code.visualstudio.com | Code Editor |
| Node.js LTS | https://nodejs.org | Run React |
| XAMPP | https://www.apachefriends.org | MySQL Database |
| Git | https://git-scm.com | Version Control |

### VS Code Extensions Required
- Extension Pack for Java
- Spring Boot Extension Pack
- Spring Boot Dashboard

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Spring Boot (Java) |
| Frontend | React.js |
| Database | MySQL |
| AI | Groq API (LLaMA 3) |
| Version Control | Git + GitHub |
| Tools | XAMPP, VS Code |

---

## 📁 Project Structure

```
ai-learning-platform/
│
├── src/                              → Spring Boot Backend
│   └── main/java/com/learning/
│       ├── controller/
│       │   ├── AuthController.java   → Login & Register API
│       │   ├── CourseController.java → Courses API
│       │   └── QuizController.java   → Quiz API
│       ├── model/
│       │   ├── User.java             → User table
│       │   ├── Course.java           → Course table
│       │   └── Quiz.java             → Quiz table
│       └── repository/
│           ├── UserRepository.java
│           ├── CourseRepository.java
│           └── QuizRepository.java
│
├── frontend/                         → React.js Frontend
│   └── src/
│       ├── App.js                    → All Pages
│       └── App.css                   → Styling
│
└── pom.xml                           → Maven Dependencies
```

---

## ⚙️ How to Run Locally

### Step 1 — Clone the Repository
```bash
git clone https://github.com/saxenamanya2005-svg/ai-learning-platform.git
cd ai-learning-platform
```

### Step 2 — Setup Database
```
1. Open XAMPP Control Panel
2. Start Apache + MySQL
3. Open phpMyAdmin (click Admin next to MySQL)
4. Create database: learning_platform
5. Click SQL tab and run:
```

```sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE course (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255)
);

CREATE TABLE quiz (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(500),
    option_a VARCHAR(255),
    option_b VARCHAR(255),
    option_c VARCHAR(255),
    option_d VARCHAR(255),
    correct_answer VARCHAR(10)
);

INSERT INTO course (title, description) VALUES
('Java Basics', 'Learn Java from scratch'),
('Spring Boot', 'Build REST APIs with Spring Boot'),
('React JS', 'Frontend development with React');

INSERT INTO quiz (question, option_a, option_b, option_c, option_d, correct_answer) VALUES
('What is JVM?', 'Java Virtual Machine', 'Java Variable Method', 'Java Version Manager', 'None of these', 'A'),
('What does REST stand for?', 'Remote State Transfer', 'Representational State Transfer', 'Request Send Transfer', 'None of these', 'B');
```

### Step 3 — Configure application.properties
```properties
spring.application.name=ai-platform
spring.datasource.url=jdbc:mysql://localhost:3306/learning_platform
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

### Step 4 — Run Backend
```bash
./mvnw spring-boot:run
```
✅ Backend runs on: **http://localhost:8080**

### Step 5 — Run Frontend
```bash
cd frontend
npm install
npm start
```
✅ Frontend runs on: **http://localhost:3000**

---

## 📡 API Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/api/register` | Register new user | `{name, email, password}` |
| POST | `/api/login` | User login | `{email, password}` |
| GET | `/api/courses` | Get all courses | — |
| GET | `/api/quiz` | Get quiz questions | — |
| POST | `/api/quiz/submit` | Submit quiz & get score | `{questionId: answer}` |
| POST | `/api/chat` | AI Chatbot | `{message}` *(Coming Soon)* |

---

## 🔧 Git Commands Used

```bash
# Initialize git
git init

# Add all files
git add .

# Commit with message
git commit -m "Your message here"

# Connect to GitHub
git remote add origin https://github.com/saxenamanya2005-svg/ai-learning-platform.git

# Push to GitHub
git push -u origin main
```

---

## 📅 Development Progress

| Day | Task | Status |
|-----|------|--------|
| Day 1 | Spring Boot Backend + MySQL + REST APIs | ✅ Done |
| Day 2 | React Frontend + Login + Courses + Quiz | ✅ Done |
| Day 3 | AI Chatbot Integration + Score Tracking | ⏳ In Progress |
| Day 4 | UI Polish + Final Touches | ⏳ Pending |

---

## 📸 Pages

| Page | Description |
|------|-------------|
| 🔐 Login | User login with email & password |
| 📝 Register | Create new account |
| 🏠 Dashboard | Main menu with all features |
| 📚 Courses | Browse all available courses |
| 📋 Quiz | Attempt MCQ quiz & get score |
| 🤖 AI Chatbot | Ask doubts to AI *(Coming Soon)* |

---

## 👩‍💻 Developer

**Manya Saxena**
- GitHub: [@saxenamanya2005-svg](https://github.com/saxenamanya2005-svg)

---

⭐ **Star this repo if you like it!**
