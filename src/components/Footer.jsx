import React from "react";

function Footer() {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <p className="footer">Copyright © {year} @ Baibhav Panda</p>
    );
}

export default Footer;