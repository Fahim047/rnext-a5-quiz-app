import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home';
import LeaderBoard from '../pages/Leaderboard';
import Login from '../pages/Login';
import QuizPage from '../pages/QuizPage';
import Registration from '../pages/Registration';
import Result from '../pages/Result';
import Dashboard from '../pages/admin/Dashboard';
import QuizSetEntryPage from '../pages/admin/quiz-set-entry-page';
import QuizSetPage from '../pages/admin/quiz-set-page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
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
		],
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
		path: '/admin/dashboard',
		element: <Dashboard />,
	},
	{
		path: '/admin/quiz-entry',
		element: <QuizSetEntryPage />,
	},
	{
		path: '/admin/quiz-set',
		element: <QuizSetPage />,
	},
]);
export default router;
