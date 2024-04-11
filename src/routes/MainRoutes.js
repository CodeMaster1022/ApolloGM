import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// pages routing
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

const WidgetStatistics = Loadable(lazy(() => import('pages/widget/statistics')));
const WidgetData = Loadable(lazy(() => import('pages/widget/data')));
const WidgetChart = Loadable(lazy(() => import('pages/widget/chart')));

//dashboard
const Dashboard = Loadable(lazy(() => import('pages/Dashboard/dashboard')));

//Funds
// const Funds = Loadable(lazy(() => import('pages/funds/Funds')));
const FundsView = Loadable(lazy(() => import('pages/funds/fund-view')));
const FundList = Loadable(lazy(() => import('pages/funds/fund-list')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
//Investors
const Investor = Loadable(lazy(() => import('pages/Investors/investor')));
const InvestorList = Loadable(lazy(() => import('pages/Investors/invest-list')));
const InvestorView = Loadable(lazy(() => import('pages/Investors/investFund-view')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'dashboard-page',
          element: <Dashboard />
        },
        {
          path: 'funds',
          // element: <Funds />,
          children: [
            // {
            //   path: 'fund-list',
            //   element: <FundList />
            // },
            {
              path: 'fund-view',
              element: <FundsView />
            },
            {
              path: '',
              element: <FundList />
            }
          ]
        },
        {
          path: 'investors',
          children: [
            {
              path: 'fund-view',
              element: <InvestorView />
            },
            {
              path: '',
              element: <Investor />
            },
            {
              path: 'investor-list',
              element: <InvestorList />
            }
          ]
        },
        {
          path: 'widget',
          children: [
            {
              path: 'statistics',
              element: <WidgetStatistics />
            },
            {
              path: 'data',
              element: <WidgetData />
            },
            {
              path: 'chart',
              element: <WidgetChart />
            }
          ]
        }
      ]
    },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    }
  ]
};
const LPMainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'dashboard-page',
          element: <Investor />
        },
        {
          path: 'fund-view',
          element: <InvestorView />
        },
        {
          path: 'funds',
          // element: <Funds />,
          children: [
            // {
            //   path: 'fund-list',
            //   element: <FundList />
            // },
            {
              path: 'fund-view',
              element: <FundsView />
            },
            {
              path: '',
              element: <InvestorList />
            }
          ]
        },
        // {
        //   path: 'investors',
        //   children: [
        //     {
        //       path: 'fund-view',
        //       element: <InvestorView />
        //     },
        //     {
        //       path: '',
        //       element: <Investor />
        //     },
        //     {
        //       path: 'investor-list',
        //       element: <InvestorList />
        //     }
        //   ]
        // },
        {
          path: 'widget',
          children: [
            {
              path: 'statistics',
              element: <WidgetStatistics />
            },
            {
              path: 'data',
              element: <WidgetData />
            },
            {
              path: 'chart',
              element: <WidgetChart />
            }
          ]
        }
      ]
    },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    }
  ]
};
export { MainRoutes, LPMainRoutes };
