import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      {page === 'login' && <Login setPage={setPage} setUserName={setUserName} />}
      {page === 'register' && <Register setPage={setPage} />}
      {page === 'dashboard' && <Dashboard setPage={setPage} userName={userName} />}
      {page === 'courses' && <Courses setPage={setPage} />}
      {page === 'quiz' && <Quiz setPage={setPage} />}
    </div>
  );
}

function Login({ setPage, setUserName }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.text();
    if (data.includes('Welcome')) {
      setUserName(data.split('Welcome ')[1]);
      setPage('dashboard');
    } else {
      setMessage('Invalid email or password!');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="logo">🎓</div>
        <h1>AI Learning Platform</h1>
        <p className="subtitle">Learn Smarter with AI</p>
        <div className="input-group">
          <span className="input-icon">📧</span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <span className="input-icon">🔒</span>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {message && <p className="error-msg">{message}</p>}
        <button className="primary-btn" onClick={handleLogin}>
          Login →
        </button>
        <p className="switch-text">
          New here?{' '}
          <span onClick={() => setPage('register')}>Create Account</span>
        </p>
      </div>
    </div>
  );
}

function Register({ setPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.text();
    if (data.includes('successfully')) {
      setMessage('Account created! Please login.');
      setTimeout(() => setPage('login'), 2000);
    } else {
      setMessage('Something went wrong!');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="logo">🎓</div>
        <h1>Create Account</h1>
        <p className="subtitle">Join AI Learning Platform</p>
        <div className="input-group">
          <span className="input-icon">👤</span>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <span className="input-icon">📧</span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <span className="input-icon">🔒</span>
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {message && (
          <p className="error-msg" style={{color: message.includes('created') ? '#51cf66' : '#ff6b6b'}}>
            {message}
          </p>
        )}
        <button className="primary-btn" onClick={handleRegister}>
          Create Account →
        </button>
        <p className="switch-text">
          Already have account?{' '}
          <span onClick={() => setPage('login')}>Login</span>
        </p>
      </div>
    </div>
  );
}

function Dashboard({ setPage, userName }) {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="nav-logo">🎓 AI Learning Platform</div>
        <button className="logout-btn" onClick={() => setPage('login')}>
          Logout
        </button>
      </nav>

      <div className="welcome-section">
        <h1>Welcome back, {userName}! 👋</h1>
        <p>What would you like to learn today?</p>
      </div>

      <div className="cards-grid">
        <div className="card" onClick={() => setPage('courses')}>
          <div className="card-icon">📚</div>
          <h2>Courses</h2>
          <p>Browse all available courses</p>
          <button>Explore →</button>
        </div>

        <div className="card" onClick={() => setPage('quiz')}>
          <div className="card-icon">📝</div>
          <h2>Quiz</h2>
          <p>Test your knowledge</p>
          <button>Start Quiz →</button>
        </div>

        <div className="card" onClick={() => setPage('chatbot')}>
          <div className="card-icon">🤖</div>
          <h2>AI Chatbot</h2>
          <p>Ask anything to AI</p>
          <button>Chat Now →</button>
        </div>
      </div>
    </div>
  );
}

function Courses({ setPage }) {
  const [courses, setCourses] = useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="nav-logo">🎓 AI Learning Platform</div>
        <button className="logout-btn" onClick={() => setPage('dashboard')}>
          ← Back
        </button>
      </nav>

      <div className="welcome-section">
        <h1>📚 All Courses</h1>
        <p>Choose a course and start learning!</p>
      </div>

      <div className="cards-grid">
        {courses.map(course => (
          <div className="card" key={course.id}>
            <div className="card-icon">📖</div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button>Start Learning →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Quiz({ setPage }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8080/api/quiz')
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  const handleAnswer = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8080/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    });
    const data = await response.text();
    setScore(data);
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="nav-logo">🎓 AI Learning Platform</div>
        <button className="logout-btn" onClick={() => setPage('dashboard')}>
          ← Back
        </button>
      </nav>

      <div className="welcome-section">
        <h1>📝 Quiz Time!</h1>
        <p>Answer all questions and submit!</p>
      </div>

      {score ? (
        <div className="score-card">
          <h1>🎉 {score}</h1>
          <button className="primary-btn" onClick={() => setPage('dashboard')}>
            Back to Dashboard →
          </button>
        </div>
      ) : (
        <div className="quiz-container">
          {questions.map((q, index) => (
            <div className="question-card" key={q.id}>
              <h3>Q{index + 1}. {q.question}</h3>
              <div className="options">
                {['A', 'B', 'C', 'D'].map(opt => (
                  <button
                    key={opt}
                    className={`option-btn ${answers[q.id] === opt ? 'selected' : ''}`}
                    onClick={() => handleAnswer(q.id, opt)}
                  >
                    {opt}. {q[`option${opt.charAt(0).toUpperCase() + opt.slice(1).toLowerCase()}`]}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button className="primary-btn" onClick={handleSubmit}>
            Submit Quiz →
          </button>
        </div>
      )}
    </div>
  );
}

export default App;