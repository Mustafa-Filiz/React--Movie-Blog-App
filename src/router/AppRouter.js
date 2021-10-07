import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';

const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/Login" component={Login} />
				<Route path="/register" component={Register} />
			</Switch>
		</Router>
	)
}

export default AppRouter;
