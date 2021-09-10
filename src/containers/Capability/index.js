import React, {useState} from "react";
import Layout from "../common";
import {Table, Tag, Space, Button, Modal, Divider, Select} from 'antd';
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

const Capability = () => {
    const [visible, setVisible] = useState(false);

    const {Option} = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Layout>
            <Styles>
                <div>
                    <h1>Capabilities Management</h1>
                    <Divider />
                    <Table columns={columns} dataSource={data}/>
                </div>
                <div className={"btn-wrapper"}>
                    <Button type="primary" onClick={() => setVisible(true)}>Create New Capability</Button>
                </div>
            </Styles>
            <Modal
                title="User Detail"
                footer={null}
                visible={visible}
                onCancel={() => setVisible(false)}>
                <div className={"modal-inputs"}>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Age"/>
                    <input type="text" placeholder="Address"/>
                    <input type="text" placeholder="Tags"/>
                </div>
                <Divider/>
                <div className={"modal-assigns"}>
                    <div>
                        <h4> Assign Group: </h4>
                        <Select defaultValue="lucy" style={{width: "48%"}} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                    <div>
                        <h4> Assign NameSpace: </h4>
                        <Select defaultValue="lucy" style={{width: "48%"}} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </div>
                <div className={"modal-action"}>
                    <Button onClick={() => setVisible(false)} type={"primary"}>Save Changes</Button>
                </div>
            </Modal>
        </Layout>
    );
}

export default Capability;