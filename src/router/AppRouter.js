import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';

const AppRouter = () => {
	return (
		<Router>
			<NavBar />
		</Router>
	)
}

export default AppRouter;
