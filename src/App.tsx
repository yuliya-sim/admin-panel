import { Admin, Resource, CustomRoutes } from "react-admin"; // eslint-disable-line import/no-unresolved
import { Route } from "react-router-dom";

import authProvider from "./authProvider";
import comments from "./comments";
import CustomRouteLayout from "./customRouteLayout";
import CustomRouteNoLayout from "./customRouteNoLayout";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import Layout from "./Layout";
import "./App.css";

import tags from "./tags";
import posts from "./posts";
import users from "./users";
import events from "./events";
import Dashboard from "./dashboard/Dashboard";
import recentNews from "./recent-news";
import archivedNews from "./archived-news";
import analytics from "./analytics";
import contacts from "./contacts";
import contactUs from "./contactUs";
import inProgress from "./inProgress";
import deals from "./deals";

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
    <Resource
      name="recent-news"
      options={{
        label: "Recent News",
      }}
      {...recentNews}
    />
    <Resource name="events" {...events} />
    <Resource name="contacts" {...contacts} />
    <Resource name="fundingData" options={{label: 'Funding Data' }} {...inProgress} />
    <Resource name="posts" {...posts} />
    <Resource name="comments" {...comments} />
    <Resource name="deals" {...deals} />
    <Resource name="tags" {...tags} />
    <Resource name="marketScans" options={{label: 'Market Scans' }} {...inProgress}  />
    <Resource name="memberList" options={{label: 'MList' }} {...inProgress}  />
    <Resource name="analytics" {...analytics} />
    <Resource name="contactUs" options={{
      label: "Contact Us",
    }} {...contactUs} />
    {(permissions) => (
      <>
        {permissions ? <Resource name="users" {...users} /> : null}
        <CustomRoutes noLayout>
          <Route
            path="/custom1"
            element={<CustomRouteNoLayout title="Posts from /custom1" />}
          />
        </CustomRoutes>
        <CustomRoutes>
          <Route
            path="/custom2"
            element={<CustomRouteLayout title="Posts from /custom2" />}
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
