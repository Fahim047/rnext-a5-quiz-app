import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import LeaderBoard from '../pages/Leaderboard';
import Login from '../pages/Login';
import QuizPage from '../pages/QuizPage';
import Registration from '../pages/Registration';
import Result from '../pages/Result';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <Registration />,
	},
	{
		path: '/quiz',
		element: <QuizPage />,
	},
	{
		path: '/result',
		element: <Result />,
	},
	{
		path: '/leaderboard',
		element: <LeaderBoard />,
	},
]);
export default router;
