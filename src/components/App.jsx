import React from "react";
import Login from "./Login";
import Footer from "./Footer";
import Icon from "./Icon";

let userIsRegistered = false;

function App() {
    return (
        <div className="container">
            <Icon />
            <h1>Welcome !</h1>
            <Login isRegistered={userIsRegistered} />
            <Footer />
        </div>
    );
}

export default App;