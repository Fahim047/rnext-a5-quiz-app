import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../AdminLayout';
import Layout from '../Layout';
import Dashboard from '../pages/admin/Dashboard';
import QuizSetEntryPage from '../pages/admin/quiz-set-entry-page';
import QuizSetPage from '../pages/admin/quiz-set-page';
import Home from '../pages/Home';
import LeaderBoard from '../pages/Leaderboard';
import Login from '../pages/Login';
import QuizPage from '../pages/QuizPage';
import Registration from '../pages/Registration';
import Result from '../pages/Result';
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
		path: '/admin',
		element: <AdminLayout />,
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
]);
export default router;
