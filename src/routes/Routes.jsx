import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NotFound from '../components/screens/not-found/NotFound'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes.data'

const Router = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={
							route.isAuth && !isAuth ? (
								<Navigate to='/auth' />
							) : (
								<route.component />
							)
						}
					/>
				))}
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
