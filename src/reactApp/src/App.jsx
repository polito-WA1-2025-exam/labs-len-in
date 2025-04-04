import { useState } from 'react'
import myicon from './assets/master.png'
import react from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navheader} from "./components/Navheader.jsx";
import {ViewItems} from "./components/ViewItems.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="col justify-content-end">
            <div className="row justify-content-center" style={{width: parent}}>
                <Navheader/>
            </div>

            <ViewItems items={['item1', 'item2', 'item3']}/>
        </div>
    )
}

export default App
