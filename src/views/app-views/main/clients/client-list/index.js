import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import utils from 'utils';
import { withRouter } from 'react-router-dom';

export class UserList extends Component {

	url = "https://jsonplaceholder.typicode.com/users";

	state = {
		users: [],
		selectedUser: null
	}

	async componentDidMount() {
		const users = await this.getUsers();
		this.setState({ users });
	}

	getUsers = async () => {
		try {
			const response = await fetch(this.url);
			const users = await response.json();
			return users;
		} catch (error) {
			console.error("Ошибка загрузки пользователей:", error);
      		return [];
		}
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({ selectedUser: userInfo});
		
		this.props.history.push({
			pathname: `/app/main/clients/setting/${userInfo.id}`,
			state: { selectedUser: userInfo },
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			selectedUser: null
    	});
	}

	render() {
		const { users } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
			},
			{
				title: 'Username',
				dataIndex: 'username',
				sorter: (a, b) => utils.antdTableSorter(a, b, 'username')
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				sorter: (a, b) => {
					const normalizePhoneNumber = phone => phone.replace(/\D+/g, '');
					return Number(normalizePhoneNumber(a.phone) - Number(normalizePhoneNumber(b.phone)));
				}
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: (_, elm) => (
					<>{elm.company.name}</>
				),
				sorter: (a, b) => utils.antdTableSorter(a.company, b.company, 'name')
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];

		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
			</Card>
		)
	}
}

export default withRouter(UserList);
