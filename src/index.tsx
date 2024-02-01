import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';

// chatacter
import CharacterDetail from './pages/Characters/detail';
import Characters from './pages/Characters';

// comics
import Comics from './pages/Comics';
import ComicDetail from './pages/Comics/detail';

// creators
import Creators from './pages/Creators';
import CreatorDetail from './pages/Creators/detail';

import Keys from './pages/Keys';
import NotFound from './pages/NotFound';

import Theme from './components/Theme';

import Header from './components/Header';
import Footer from './components/Footer';

import store from './redux/store';

import GlobalStyle from './styles/global';
import { ThemeButton } from './components/ThemeButton';

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
        path: '/characters/:characterId',
        element: <CharacterDetail />,
        errorElement: <NotFound />,
    },
    {
        path: '/comics',
        element: <Comics />,
        errorElement: <NotFound />,
    },
    {
        path: '/comics/:comicId',
        element: <ComicDetail />,
        errorElement: <NotFound />,
    },
    {
        path: '/creators',
        element: <Creators />,
        errorElement: <NotFound />,
    },
    {
        path: '/creators/:creatorId',
        element: <CreatorDetail />,
        errorElement: <NotFound />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const excludedPages = ['/keys'];
const isExcludedPage = excludedPages.includes(window.location.pathname);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Theme>
                <GlobalStyle />
                <ThemeButton />

                {!isExcludedPage && <Header />}

                <RouterProvider router={router} />

                <Footer />
            </Theme>
        </Provider>
    </React.StrictMode>
);
