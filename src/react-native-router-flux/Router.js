import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Input } from './components/common';
import LoginForm from './components/LoginForm';
import NewGameActivity from './NewGameActivity';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="input" component={Input} title="This is Input" />
				<Scene key="employeeList" component={EmployeeList} title="Employees" initial/>
			</Scene>
		</Router>
	);
};

export default RouterComponent