import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Styles from "./styles";

const Layout = (props) => {
    return (
        <Styles>
            <Topbar/>
            <div className={"app-wrapper"}>
                <Sidebar/>
                <div className={"app-content"}>
                    {props.children}
                </div>
            </div>
        </Styles>
    );
}

export default Layout;