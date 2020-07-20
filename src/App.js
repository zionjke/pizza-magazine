import React, {useEffect, useState} from 'react';
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import axios from 'axios'



function App() {
    const [pizzas,setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(res => {
            setPizzas(res.data.pizzas)
        })
    },[]);

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render={ () => <Home items={pizzas}/>}/>
                    <Route exact path='/cart' component={Cart}/>
                </div>
            </div>
        </div>
    );
}

export default App;
