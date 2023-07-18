// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import Carousel from './components/Carousel'
import { useState,useEffect } from 'react' 

function App() {
  const [currentCard, setCurrentCard] = useState(0)
  const [cardData, setCardData] = useState([
    // https://www.baseball-reference.com/players/a/alonspe01.shtml
    // https://www.baseball-reference.com/players/b/batybr01.shtml
    // https://www.baseball-reference.com/players/o/ottavad01.shtml
    {"stat":{"war":1},"player":{"id":683146,"fullName":"Brett Baty"},"id":0,"name":"me","war":1.0,"icon":"https://midfield.mlbstatic.com/v1/people/683146/spots/120?zoom=1.2","pic":"https://img.mlbstatic.com/mlb-photos/image/upload/w_700,q_auto:good/v1/people/683146/action/hero/current"}
  ]);

  useEffect(() => {
    fetchUserData()
  }, [])

const fetchUserData = () => {
    fetch("https://statsapi.mlb.com/api/v1/stats?stats=sabermetrics&group=hitting&sportId=1&season=2023&teamId=121")
      .then(response => {
        //console.log(response.json());
         return response.json()
      })
      .then(data => {
        // console.log(data.stats[0].splits);
         setCardData(data.stats[0].splits)
      })
  }


  return (
    <>
    <div className="mt-4 p-3 container border border-primary-subtle rounded-3 bg-mets-primary">
      <Header />
      <div className="container">
        <Carousel card={currentCard} cardData={cardData} />
      </div>
    </div>
{/*       
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       */}
    </>
  )
}

export default App
