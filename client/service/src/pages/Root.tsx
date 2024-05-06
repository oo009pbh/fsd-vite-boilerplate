import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';

// Const
// Api
// Styles
import 'animate.css';

// Actions
// Templates
// Pages
// DEV
// Context
// Hooks
// Routes
import { devRoutes } from '@app/routes';

const index = () => {
  return (
    <div id="root-container__main">
      <Routes>
        {devRoutes.map((route) => {
          return (
            <Route
              key={`dev-routes-${route.path}`}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default index;
