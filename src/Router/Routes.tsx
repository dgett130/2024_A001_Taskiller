import { createBrowserRouter } from 'react-router-dom';
import App from "../App";
import React from 'react';
import {Tasklist} from "../Pages/tasklist/tasklist";
import {Gantt} from "../Pages/gantt/gantt";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Tasklist /> },
        ]
    },
    { path: 'gantt', element: <Gantt />}
])