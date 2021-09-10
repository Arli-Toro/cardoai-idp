import React from "react";
import { QuestionOutlined, SettingOutlined, UserOutlined, SearchOutlined} from '@ant-design/icons';
import folderImg from "../../assets/images/folder.png";

const Topbar = () => {
    return (
        <div className={"topbar-wrraper"}>
            <div className={"topbar-title"}>
                <span>&nbsp;</span>
            </div>
            <div className={"topbar-search"}>
                <SearchOutlined />
                <input type="text" placeholder="Search for users, groups or namespace"/>
            </div>
            <div className={"topbar-actions"}>
                <SettingOutlined />
                <QuestionOutlined />
                <UserOutlined />
            </div>
        </div>
    );
}

export default Topbar;