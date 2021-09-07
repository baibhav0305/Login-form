import React from "react";
import Login from "./Login";
import Footer from "./Footer";
import Icon from "./Icon";

let isLoggedIn = false;

function App() {
    return (
        <div className="container">
            <Icon />
            <h1>Welcome !</h1>
            {isLoggedIn ? <h1>Hello</h1> : <Login />}
            <Footer />
        </div>
    );
}

export default App;