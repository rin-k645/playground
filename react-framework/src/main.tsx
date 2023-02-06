import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import store from './stores/store';
import './index.css';
import { UserDefaultPage, DefaultPage, ChattingDefaultPage } from './pages/DefaultPages';
import HomePage from './pages/home/HomePage';
import MatchPage from './pages/match/MatchPage';

import persistStore from 'redux-persist/es/persistStore';
import LoginPage from './pages/user/LoginPage';
import LoginRegistPage from './pages/user/LoginRegistPage';
import LoginFailPage from './pages/user/LoginFailPage';
import LoginSuccessPage from './pages/user/LoginSuccessPage';
import RegisterCompletePage from './pages/user/RegisterCompletePage';
import ChattingListPage from './pages/chatting/ChattingListPage';
import ChattingRoomPage from './pages/chatting/ChattingRoomPage';
import MatchDetailPage from './pages/match/MatchDetailPage';

const container = document.getElementById('root') as HTMLElement;
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'match/',
        element: <MatchPage />,
      },
      {
        path: 'match/detail',
        element: <MatchDetailPage/>,
      }
    ]
  },
  {
    path: '/',
    element: <UserDefaultPage />,
    children: [
      {
        // '카카오 계정으로 로그인' 버튼이 있는 로그인 페이지
        path: 'login',
        element: <LoginPage />,
      },
      // 앱 계정이 없는 사용자에게 보여줄 회원가입 페이지
      {
        // 개인정보, 관심정보, 운동레벨 변경 탭
        path: 'login/regist',
        element: <LoginRegistPage />,
      },
      {
        // 로그인 실패 페이지
        path: 'login/fail',
        element: <LoginFailPage />,
      },
      {
        // 백엔드 서버에서 로그인 토큰까지 받아왔을 때 Redirect될 URL
        path: 'login/success',
        element: <LoginSuccessPage />,
      },
      {
        path: 'login/register/complete',
        element: <RegisterCompletePage />,
      }
    ]
  },
  {
    path: '/',
    element: <ChattingDefaultPage />,
    children: [
      {
        path: 'chatting',
        element: <ChattingListPage />,
      },
      {
        path: 'chatting/room/:roomId',
        element: <ChattingRoomPage />,
      },
    ]
  },
]);


createRoot(container).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider >
  </QueryClientProvider>

);
