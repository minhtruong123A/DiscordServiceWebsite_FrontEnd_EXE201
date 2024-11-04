import { lazy } from 'react';

// project import
import Loadable from '/src/components/Loadable';
import Dashboard from '/src/layout/Dashboard';


const Color = Loadable(lazy(() => import('/src/pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('/src/pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('/src/pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('/src/pages/dashboard/index')));
const AuthLogin = Loadable(lazy(() => import('/src/pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('/src/pages/authentication/register')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('/src/pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = [{
  path: '/admin',
  element: <Dashboard />,
  children: [
    {
      path: '/admin',
      element: <DashboardDefault />
    },
    {
      path: '/admin/color',
      element: <Color />
    },
    {
      path: '/admin/sample-page',
      element: <SamplePage />
    },
    {
      path: '/admin/shadow',
      element: <Shadow />
    },
    {
      path: '/admin/typography',
      element: <Typography />
    },

  ]
}, {
  path: '/admin',
  children: [
    {
      path: '/admin/login',
      element: <AuthLogin />
    },
    {
      path: '/admin/register',
      element: <AuthRegister />
    },
  ]
}
];

export default AdminRoutes;
