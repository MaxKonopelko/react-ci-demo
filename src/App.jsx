import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>React CI/CD Demo 🚀</h1>
      <p>Автоматический деплой через GitHub Actions</p>

      <div style={{ margin: '20px 0' }}>
        <button data-testid="decrement-btn" onClick={() => setCount((c) => c - 1)} style={btn}>
          −
        </button>
        <span
          data-testid="count-display"
          style={{ margin: '0 20px', fontSize: '2rem', fontWeight: 'bold' }}
        >
          {count}
        </span>
        <button data-testid="increment-btn" onClick={() => setCount((c) => c + 1)} style={btn}>
          +
        </button>
      </div>

      <button
        data-testid="reset-btn"
        onClick={() => setCount(0)}
        style={{ ...btn, background: '#e74c3c' }}
      >
        Сброс
      </button>
    </div>
  )
}

const btn = {
  padding: '10px 24px',
  fontSize: '1.2rem',
  background: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
}

export default App
