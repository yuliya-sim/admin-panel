import { Admin, Resource, CustomRoutes } from 'react-admin'; // eslint-disable-line import/no-unresolved
import { Route } from 'react-router-dom';

import authProvider from './authProvider';
import comments from './comments';
import CustomRouteLayout from './customRouteLayout';
import CustomRouteNoLayout from './customRouteNoLayout';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import Layout from './Layout';
import './App.css';

import tags from './tags';
import posts from './posts';
import users from './users';
import Dashboard from "./dashboard/Dashboard";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    title="Example Admin"
    layout={Layout}
    dashboard={Dashboard}
  >
    <CustomRoutes noLayout>
      <Route
        path="/custom"
        element={<CustomRouteNoLayout title="Posts from /custom" />}
      />
    </CustomRoutes>
    <Resource name="posts" {...posts} />
    <Resource name="comments" {...comments} />
    <Resource name="tags" {...tags} />
    {permissions => (
      <>
        {permissions ? <Resource name="users" {...users} /> : null}
        <CustomRoutes noLayout>
          <Route
            path="/custom1"
            element={
              <CustomRouteNoLayout title="Posts from /custom1" />
            }
          />
        </CustomRoutes>
        <CustomRoutes>
          <Route
            path="/custom2"
            element={
              <CustomRouteLayout title="Posts from /custom2" />
            }
          />
        </CustomRoutes>
      </>
    )}
    <CustomRoutes>
      <Route
        path="/custom3"
        element={<CustomRouteLayout title="Posts from /custom3" />}
      />
    </CustomRoutes>
  </Admin>
);
