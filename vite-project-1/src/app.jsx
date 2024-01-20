import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import {Counter} from "./Component/Counter"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Count is : {c}</p>

      <Counter c = {count}  sC={setCount}/>
    </>
  )
}
