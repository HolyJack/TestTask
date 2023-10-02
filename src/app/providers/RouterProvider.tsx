import { Navigate, useRoutes } from "react-router";
import { PATH_PAGE } from "~shared/lib/react-router";

import { MainLayout } from "~pages/layouts";
import Page404 from "~pages/page-404";
import HomePage from "~pages/home";
import PostPage from "~pages/post";

export function Router() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: PATH_PAGE.root,
          element: <HomePage />,
        },
        {
          path: "post",
          children: [
            {
              element: <Navigate to={PATH_PAGE.page404} replace />,
              index: true,
            },
            {
              path: ":postId",
              element: <PostPage />,
            },
          ],
        },
      ],
    },
    { path: "404", element: <Page404 /> },
    { path: "*", element: <Navigate to={PATH_PAGE.page404} replace /> },
  ]);
}
