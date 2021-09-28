import React from 'react'
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component,authentication, ...rest }) {
    return (
        <Route
		{...rest}
		render={props => {
			return authentication ? (
				<Component {...props} />
			) : (
				<Redirect
					to="/"
				/>
			);
		}}
		/>
    )
}

export default ProtectedRoute
