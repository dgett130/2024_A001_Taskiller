import './App.css'
import {Tasklist} from "./tasklist/tasklist.tsx";


function App() {


  return (
      <div className="app">
          <div className="container border-red">
              <div className="content-container border-green">
                <div className="widget-container border-yellow">
                    <Tasklist/>
                </div>
              </div>
          </div>
          <div className="tool-container border-blue">
          </div>
      </div>
  )
}

export default App



