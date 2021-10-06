import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Main from '../pages/Main';

const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Main} />
			</Switch>
		</Router>
	)
}

export default AppRouter;
