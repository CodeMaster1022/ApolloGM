// material-ui
// import { useMediaQuery, useTheme } from '@mui/material';

// project import
// import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';
import { useSelector } from 'store';
// import { openDrawer } from 'store/reducers/menu';
// import { useSelector } from 'store';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => {
  const menu = useSelector((state) => state.menu);
  // const theme = useTheme();
  // const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  // const menu = useSelector((state) => state.menu);
  // const { drawerOpen } = menu;
  const { drawerOpen } = menu;
  return (
    <>
      {drawerOpen ? (
        <SimpleBar
          sx={{
            '& .simplebar-content': {
              display: 'flex',
              flexDirection: 'column',
              marginTop: '50px'
              // height: '90vh'
            }
          }}
        >
          <Navigation />
          {/* <NavCard /> */}
          {/* {drawerOpen && !matchDownMD && <NavCard />} */}
        </SimpleBar>
      ) : (
        <SimpleBar
          sx={{
            '& .simplebar-content': {
              display: 'flex',
              flexDirection: 'column',
              marginTop: '60px'
              // height: '90vh'
            }
          }}
        >
          <Navigation />
          {/* <NavCard /> */}
          {/* {drawerOpen && !matchDownMD && <NavCard />} */}
        </SimpleBar>
      )}
    </>
  );
};

export default DrawerContent;
