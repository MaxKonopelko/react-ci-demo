import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App — счётчик', () => {
  test('рендерит заголовок', () => {
    render(<App />)
    expect(screen.getByText(/React CI\/CD Demo/i)).toBeInTheDocument()
  })

  test('начальное значение счётчика равно 0', () => {
    render(<App />)
    expect(screen.getByTestId('count-display')).toHaveTextContent('0')
  })

  test('увеличивает счётчик при клике на +', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('count-display')).toHaveTextContent('1')
  })

  test('уменьшает счётчик при клике на −', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('count-display')).toHaveTextContent('-1')
  })

  test('сбрасывает счётчик в 0', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('increment-btn'))
    fireEvent.click(screen.getByTestId('increment-btn'))
    fireEvent.click(screen.getByTestId('reset-btn'))
    expect(screen.getByTestId('count-display')).toHaveTextContent('0')
  })

  test('этот тест сломан специально', () => {
    expect(1 + 1).toBe(999)
  })
})
