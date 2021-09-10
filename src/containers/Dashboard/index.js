import React from "react";
import Layout from "../common";
import Styles from "./styles";
import {Card, Avatar, Divider} from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import Animation from "../../components/Animation";
import userAnimation from "../../components/Animation/json/users.json";
import groupsAnimation from "../../components/Animation/json/groups.json";
import nameSpaceAnimation from "../../components/Animation/json/namespace.json";
import capabilityAnimation from "../../components/Animation/json/capability.json";

const { Meta } = Card;

const Dashboard = () => {
    return (
            <Layout>
                <h1>Dashboard</h1>
                <Divider />
                <Styles>
                    <div>
                        <Card
                            style={{marginTop: 16}}
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <EditOutlined key="edit"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <div className={"card-content"}>
                                <Animation animation={userAnimation} loop={false} width={"150px"} height={"150px"}/>
                                <div>
                                    <h2>Users</h2>
                                    <h1>67</h1>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{marginTop: 16}}
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <EditOutlined key="edit"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <div className={"card-content"}>
                                <Animation animation={groupsAnimation} width={"150px"} height={"150px"}/>
                                <div>
                                    <h2>Groups</h2>
                                    <h1>16</h1>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{marginTop: 16}}
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <EditOutlined key="edit"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <div className={"card-content"}>
                                <Animation animation={nameSpaceAnimation} width={"150px"} height={"150px"}/>
                                <div>
                                    <h2>Namespaces</h2>
                                    <h1>3</h1>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{marginTop: 16}}
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <EditOutlined key="edit"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <div className={"card-content"}>
                                <Animation animation={capabilityAnimation} width={"150px"} height={"150px"}/>
                                <div>
                                    <h2>Capabilities</h2>
                                    <h1>129</h1>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Styles>
                <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </Layout>
    );
}

export default Dashboard;