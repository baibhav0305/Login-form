import React from "react";
import Login from "./Login";
import Footer from "./Footer";
import Icon from "./Icon";
import Detail from "./Detail"

let userIsRegistered;
let randomChoice = Math.floor(Math.random() * 2);

if (randomChoice) {
    userIsRegistered = true;
}
else {
    userIsRegistered = false;
}

function App() {
    return (
        <div className="container">
            <Icon />
            <h1>Welcome {userIsRegistered ? "Back  ! " : " ! "} </h1>
            <Login isRegistered={userIsRegistered} />
            <Detail currentPage={userIsRegistered} />
            <Footer />
        </div>
    );
}

export default App;