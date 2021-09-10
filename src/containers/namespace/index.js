import React, {useState} from "react";
import Layout from "../common";
import {Table, Tag, Tabs, Space, Button, Divider} from 'antd';
import Styles from "./styles"
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a><EditOutlined/></a>
                <a><DeleteOutlined/></a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const NameSpace = () => {

    const { TabPane } = Tabs;
    const operations = <Button type="primary">Create New Namespace</Button>;

    return (
        <Layout>
            <Styles>
                <div>
                    <h1>Namespace Management</h1>
                    <Divider />
                    <Tabs tabBarExtraContent={operations}>
                        <TabPane tab="Mercury" key="1">
                            <Tabs tabPosition={"left"}>
                                <TabPane tab="Group 1" key="1">
                                    <Table columns={columns} dataSource={data}/>
                                    <Button type="primary">Add Capability</Button>
                                </TabPane>
                                <TabPane tab="Group 2" key="2">
                                    <Table columns={columns} dataSource={data}/>
                                    <Button type="primary">Add Capability</Button>
                                </TabPane>
                                <TabPane tab="Group 3" key="3">
                                    <Table columns={columns} dataSource={data}/>
                                    <Button type="primary">Add Capability</Button>
                                </TabPane>
                            </Tabs>
                        </TabPane>
                        <TabPane tab="Equilizer" key="2">
                            <Tabs tabPosition={"left"}>
                                <TabPane tab="Group 1" key="1">
                                    <Table columns={columns} dataSource={data}/>
                                    <Button type="primary">Add Capability</Button>
                                </TabPane>
                                <TabPane tab="Group 2" key="2">
                                    <Table columns={columns} dataSource={data}/>
                                    <Button type="primary">Add Capability</Button>
                                </TabPane>
                                <TabPane tab="Group 3" key="3">
                                    <Table columns={columns} dataSource={data}/>
                                    <Button type="primary">Add Capability</Button>
                                </TabPane>
                            </Tabs>
                        </TabPane>
                    </Tabs>
                </div>
            </Styles>
        </Layout>
    );
}

export default NameSpace;