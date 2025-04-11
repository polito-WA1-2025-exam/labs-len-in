import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navheader} from "./components/Navheader.jsx";
import {ViewStores} from "./components/ViewStores.jsx";
import {ViewBags} from "./components/ViewBags.jsx";

function App() {

    return (
        <div className="flex-column" property={{width: parent, height: parent, backgroundColor: "red"}}>
            <Navheader/>
            <div className="card-body mt-3" property="width: max-content;">
                <ViewStores items={['Store1', 'Store2', 'Store3']}/>
                <ViewBags items={['Bag1', 'Bag2', 'Bag3']}/>
            </div>
        </div>
    )
}

export default App
