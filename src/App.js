import React, {useEffect} from 'react';
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import {getPizzas} from "./redux/reducers/pizzas";




function App({getPizzas,pizzas}) {

    useEffect(() => {
        getPizzas()
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

const mapStateToProps = (state) => {
    return {
        pizzas: state.pizzas.items
    }
}

export default connect(mapStateToProps,{getPizzas})(App);
