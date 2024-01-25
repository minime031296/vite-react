import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostItem from './Component/PostItem'


function App() {
  const [data, setData] = useState([])

  const [isLoading, setisLoading] = useState(true)

  const [Error, setError] = useState("")

  const [page, setPage] = useState(1)
  
  useEffect(() => {
    dataDisplay()
  },[page])



  async function dataDisplay() {
    try{let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
    let d = await response.json()
   
    setData(d)
    setisLoading(false)
  }catch(error){
    console.error(error)
    setError(error)
  }
  }
 

  return (
    <>
     <div>
      
    {isLoading ? <p>Data Loading</p> : <PostItem data = {data}  page={page} setPage={setPage}/> }
   
    </div>
     </>
  )
}

export default App
