import React, { Component } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import Loading from 'components/shared-components/Loading';

const SettingOption = ({ match, location }) => {
	return (
		<Menu
			defaultSelectedKeys={`${match.url}/edit-profile}`}
			mode="inline"
			selectedKeys={[location.pathname]}
		>
			<Menu.Item key={`${match.url}/edit-profile`}>
				<UserOutlined />
				<span>Edit Profile</span>
				<Link to={'edit-profile'} />
			</Menu.Item>
		</Menu>
	);
};

const SettingContent = ({ match, user }) => {
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/edit-profile`} />
			<Route path={`${match.url}/edit-profile`} render={() => <EditProfile user={user} />} />
		</Switch>
	)
}

export class Setting extends Component {
	state = {
		user: this.props.location.state?.selectedUser || null,
	}
	componentDidMount() {
		const { id } = this.props.match.params;

		if (!this.state.user) {
			this.fetchUser(id);
		}
	}

	fetchUser = async (id) => {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
			const userData = await response.json();
			this.setState({ user: userData});
		} catch (error) {
			console.error("Ошибка загрузки пользователя:", error);
		}
	}

	render() {
		const { user } = this.state;

		if (!user) return <Loading cover="page"/>
	
		return (
			<InnerAppLayout 
				sideContentWidth={320}
				sideContent={<SettingOption user={user} {...this.props}/>}
				mainContent={<SettingContent user={user} {...this.props}/>}
			/>
    	);
	}
}

export default Setting
