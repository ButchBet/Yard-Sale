import React from "react";
import "@styles/notFound.css";
import erro404 from "@images/icons/404-error.svg";

const NotFound = () => {
    return(
        <div className="not-found">
        <div className="container">
            <img src={erro404} alt="Error 404" className="logo" />
            <p className="text">Page {document.location.href} not found</p>
            <a href="#" className="link">Go back</a>
        </div>
        </div>
    )
}

export default NotFound;