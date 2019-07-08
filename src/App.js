import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {ShopListContainer} from "./components/ShopListContainer";

class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <div className="container">
                    <ShopListContainer/>
                </div>
                <Footer/>
            </>
        );
    }


}

export default App;
