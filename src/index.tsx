import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './pages/App';
import Keys from './pages/Keys';
import Creators from './pages/Creators';
import Comics from './pages/Comics';
import Characters from './pages/Characters';

import store from './redux/store';
import GlobalStyle from './styles/global';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
