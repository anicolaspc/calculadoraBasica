import { useState } from 'react'
import { evaluate } from 'mathjs'
import 'antd/dist/reset.css'
import Display from './components/Display'
import Button from './components/Button'

function App() {
  const [input, setInput] = useState('')

  const handleClick = (value) => {
    setInput(input + value)
  }

  const handleClear = () => {
    setInput('')
  }

  const handleDelete = () => {
    setInput(input.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      const result = evaluate(input)
      setInput(result.toString())
    } catch (err) {
      setInput('Error')
    }
  }

  return (
    <>
      <Display value={input} />
      <Button
        handleClick={handleClick}
        handleClear={handleClear}
        handleDelete={handleDelete}
        handleCalculate={handleCalculate}
      />
    </>
  )
}

export default App
