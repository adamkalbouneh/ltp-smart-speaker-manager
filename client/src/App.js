import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(()=> {
    fetch("/home").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div>
      {(typeof data.Home == 'undefined')? (
        <p>Loading...</p>
      ) : (
        data.Home.map((Home, i) => (
          <p key={i}>{Home}</p>
        ))
      )}
    </div>
  )
}

export default App
