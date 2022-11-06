import React from "react"
import Header from "@components/Header"

const Layout = ({children}) => {
    return (
        <div className="Layaut">
            <Header />
            {children}
        </div>
    );
}

export default Layout;