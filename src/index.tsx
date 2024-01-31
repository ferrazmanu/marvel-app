import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import Keys from './pages/Keys';
import Creators from './pages/Creators';
import Comics from './pages/Comics';
import Characters from './pages/Characters';

import store from './redux/store';
import GlobalStyle from './styles/global';
import { Header } from './components/Shared/Header';
import Theme from './components/Shared/Theme';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: '/keys',
        element: <Keys />,
        errorElement: <NotFound />,
    },
    {
        path: '/characters',
        element: <Characters />,
        errorElement: <NotFound />,
    },
    {
        path: '/comics',
        element: <Comics />,
        errorElement: <NotFound />,
    },
    {
        path: '/creators',
        element: <Creators />,
        errorElement: <NotFound />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const mainPages = ['/', '/characters', '/comics', '/creators'];
const isMainPage = !mainPages.includes(window.location.pathname);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Theme>
                <GlobalStyle />

                {!isMainPage && <Header />}

                <RouterProvider router={router} />
            </Theme>
        </Provider>
    </React.StrictMode>
);
