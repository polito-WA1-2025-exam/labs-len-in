import { useState } from 'react'
import myicon from './assets/master.png'
import react from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navheader} from "./components/Navheader.jsx";
import {ViewStores} from "./components/ViewStores.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex-column" property={{width: parent, height: parent, backgroundColor: "red"}}>
            <Navheader/>
            <div className="card-body mt-3" property="width: max-content;">
                <ViewStores items={['Store1', 'Store2', 'Store3']}/>
            </div>
        </div>
    )
}

export default App
