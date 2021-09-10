import React from "react";

function Detail(props) {
    return (
        <div>
            <p> ( PS: right now Login and Register page alternate randomly ) </p>
            <p> Current Page: {props.currentPage ? "Login" : "Register"} </p>
        </div>
    );
}

export default Detail;