import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

 return (
  <>
  <h1 className="text-3xl font-bold bg:red underline">
  Hello<span className='text-red-600'>world!</span> 
</h1>
  </>
 )
 }
 export default App