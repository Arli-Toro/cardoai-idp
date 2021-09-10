import React from "react";
import {Link} from 'react-router-dom';
import {Popover, Divider} from 'antd';
import dashboardImg from "../../assets/images/dashboard.png";
import usersImg from "../../assets/images/users.png";
import groupsImg from "../../assets/images/groups.png";
import nameSpaceImg from "../../assets/images/namespace.png";
import capabilityImg from "../../assets/images/capability.png";


const Sidebar = () => {

    const dashboard = (
        <span>Dashboard</span>
    );

    const users = (
        <span>Users</span>
    );

    const groups = (
        <span>Groups</span>
    );

    const namespace = (
        <span>NameSpace</span>
    );

    const capabilities = (
        <span>Capabilities</span>
    );

    return (
        <div className={"sidebar-wrapper"}>
            <div>
                <Popover placement="right" content={dashboard} trigger="hover">
                    <Link to="/dashboard">
                        <img src={dashboardImg}/>
                    </Link>
                </Popover>
                <Divider/>
            </div>
            <div>
                <Popover placement="right" content={users} trigger="hover">
                    <Link to="/users">
                        <img src={usersImg}/>
                    </Link>
                </Popover>
                <Divider/>
            </div>
            <div>
                <Popover placement="right" content={groups} trigger="hover">
                    <Link to="/groups">
                        <img src={groupsImg}/>
                    </Link>
                </Popover>
                <Divider/>
            </div>
            <div>
                <Popover placement="right" content={namespace} trigger="hover">
                    <Link to="/namespace">
                        <img src={nameSpaceImg}/>
                    </Link>
                </Popover>
                <Divider/>
            </div>
            <div>
                <Popover placement="right" content={capabilities} trigger="hover">
                    <Link to="/capability">
                        <img src={capabilityImg}/>
                    </Link>
                </Popover>
                <Divider/>
            </div>
        </div>
    );
}

export default Sidebar;