import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import BlogPosts from "./views/BlogPosts";
import FAQ from "./views/FAQ";
import HeatMap from "./views/HeatMap";

import LandingPage from "./pages/LandingPage"

export default [
  {
    path: "/",
    exact: true,
    layout: null,
    //component: () => <Redirect to="/blog-overview" />
    component: LandingPage,
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/submit-appeal",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/education",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/faq",
    layout: DefaultLayout,
    component: FAQ
  },
  {
    path: "/heatmap",
    layout: DefaultLayout,
    component: HeatMap
  }
];
