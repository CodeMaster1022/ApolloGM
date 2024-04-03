import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Container, Toolbar } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import Footer from './Footer';
import HorizontalBar from './Drawer/HorizontalBar';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import { FundViewDropdownButton, FundButton } from 'components/@extended/FundButton';

import { MenuOrientation } from 'config';
import navigation from 'menu-items';
import useConfig from 'hooks/useConfig';
import { dispatch } from 'store';
import { openDrawer } from 'store/reducers/menu';
// import Typography from 'themes/overrides/Typography';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const currentLocation = useLocation();

  const theme = useTheme();
  const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { container, miniDrawer, menuOrientation } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  // set media wise responsive drawer
  useEffect(() => {
    console.log(currentLocation.pathname, 'hiddddddd');
    if (!miniDrawer) {
      dispatch(openDrawer(!matchDownXL));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownXL]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      {!isHorizontal ? <Drawer /> : <HorizontalBar />}
      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit' }} />
        <Container
          maxWidth={container ? 'calc(100% - 10px)' : false}
          sx={{
            ...(container && { px: { xs: 0, sm: 2 } }),
            position: 'relative',
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}
          >
            {currentLocation.pathname === '/dashboard-page' && <button>dashboard</button>}
            {currentLocation.pathname === '/funds/fund-view' && (
              <>
                <h3>funds&nbsp;-&nbsp;fund-view</h3>
                {/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} /> */}
                <FundViewDropdownButton title="actions" />
              </>
            )}
            {currentLocation.pathname === '/funds/funds' && (
              <>
                <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
                <FundButton title="Add Fund" />
              </>
            )}
          </Container>
          <Outlet />
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
