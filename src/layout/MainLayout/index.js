import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Container, Toolbar } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import Footer from './Footer';
// import HorizontalBar from './Drawer/HorizontalBar';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import { FundViewDropdownButton, FundButton, WidgetButton } from 'components/@extended/FundButton';

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
  const matchDownXL = useMediaQuery(theme.breakpoints.down('lg'));
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { container, miniDrawer, menuOrientation } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  // set media wise responsive drawer
  useEffect(() => {
    if (!miniDrawer) {
      dispatch(openDrawer(!matchDownXL));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownXL]);

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
      <Header />
      {/* {!isHorizontal ? <Drawer /> : <HorizontalBar />} */}
      <Drawer />
      <Box sx={{ width: 'calc(100% - 270px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ mt: isHorizontal ? 4 : 'inherit' }} />
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '12px' }}>
            {currentLocation.pathname === '/dashboard-page' && (
              <>
                <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
                <WidgetButton title="Add Widget" />
              </>
            )}
            {currentLocation.pathname.includes('/funds/') && (
              <>
                <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
                <FundViewDropdownButton title="actions" />
              </>
            )}
            {currentLocation.pathname === '/funds' && (
              <>
                {/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} /> */}
                <h2>Funds</h2>
                <FundButton title="Add Fund" />
              </>
            )}
          </Box>
          <Outlet />
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
