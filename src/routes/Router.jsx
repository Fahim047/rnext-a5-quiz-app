import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../AdminLayout';
import Layout from '../Layout';
import Dashboard from '../pages/admin/Dashboard';
import QuizSetEntryPage from '../pages/admin/quiz-set-entry-page';
import QuizSetPage from '../pages/admin/quiz-set-page';
import Home from '../pages/Home';
import LeaderBoard from '../pages/LeaderBoard';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import QuizPage from '../pages/QuizPage';
import Registration from '../pages/Registration';
import Result from '../pages/Result';
import PrivateRoutes from './PrivateRoutes';
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
				path: '/quizzes/:quizSetId',
				element: (
					<PrivateRoutes>
						<QuizPage />
					</PrivateRoutes>
				),
			},
			{
				path: '/result/:quizSetId',
				element: (
					<PrivateRoutes>
						<Result />
					</PrivateRoutes>
				),
			},
			{
				path: '/leaderboard',
				element: <LeaderBoard />,
			},
			{
				path: '/leaderboard/:quizSetId',
				element: (
					<PrivateRoutes>
						<LeaderBoard />
					</PrivateRoutes>
				),
			},
		],
	},
	{
		path: '/admin',
		element: (
			<PrivateRoutes>
				<AdminLayout />
			</PrivateRoutes>
		),
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: 'quiz-set/create',
				element: <QuizSetPage />,
			},
			{
				path: 'quiz-set/:quizSetId',
				element: <QuizSetPage />,
			},
			{
				path: 'quiz-set-entry-page/:quizSetId',
				element: <QuizSetEntryPage />,
				// loader: getQuizSetEntryPageAction,
			},
			{
				path: '*',
				element: <h2>hello</h2>,
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
		path: '/logout',
		element: <Logout />,
	},
]);
export default router;
