import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {ShopList} from "./components/ShopList";

class App extends React.Component {

    render() {
        return (
            <>
                <header className="container-fluid">
                    <Header/>
                </header>

                <div className="App container">
                    <ShopList/>
                </div>
                <footer className="container-fluid mb-0">
                    <Footer/>
                </footer>
            </>
        );
    }


}

export default App;
