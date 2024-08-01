import './App.css'
import {Tasklist} from "./tasklist/tasklist.tsx";
import {Toolbar} from "./toolbar/toolbar.tsx";
import mainLogo from './assets/logo_init.png';
import { atom } from "jotai";
import FormDialog from "./shared/formDialog.tsx";



export const addDialogAtom = atom(false)

function App() {

  return (
      <div className="app">
          <div className="container">
              <div className="content-container">
                  <div className={"logo-header-container"}>
                      <img src={mainLogo} alt={"Logo.png"} />
                  </div>
                <div className="widget-container">
                    <Tasklist/>
                </div>
              </div>
          </div>
          <div className="tool-container">
              <Toolbar />
              <FormDialog></FormDialog>
          </div>
      </div>
  )
}

export default App



