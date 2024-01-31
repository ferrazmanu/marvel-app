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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/keys',
        element: <Keys />,
    },
    {
        path: '/characters',
        element: <Characters />,
    },
    {
        path: '/comics',
        element: <Comics />,
    },
    {
        path: '/creators',
        element: <Creators />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const isKeysPage = window.location.pathname === '/keys';

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Theme>
                <GlobalStyle />

                {!isKeysPage && <Header />}

                <RouterProvider router={router} />
            </Theme>
        </Provider>
    </React.StrictMode>
);
