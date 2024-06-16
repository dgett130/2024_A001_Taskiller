import './App.css'
import {Tasklist} from "./tasklist/tasklist.tsx";
import {Toolbar} from "./toolbar/toolbar.tsx";
import mainLogo from './assets/logo_init.png';


function App() {


  return (
      <div className="app">
          <div className="container border-red">
              <div className="content-container border-green">
                  <div className={"logo-header-container border-blue"}>
                      <img src={mainLogo} alt={"Logo.png"} />
                  </div>
                <div className="widget-container border-yellow">
                    <Tasklist/>
                </div>
              </div>
          </div>
          <div className="tool-container border-blue">
              <Toolbar />
          </div>
      </div>
  )
}

export default App



