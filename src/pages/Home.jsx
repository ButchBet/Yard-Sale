import React from "react";
import Main from "@containers/Main";
import DesktopMenu from "@components/DesktopMenu";
import MobileMenu from "@components/MobileMenu";

const Home = () => {
    return(
        <Main>
            <DesktopMenu />
            <MobileMenu />
        </Main>
    )
}

export default Home;