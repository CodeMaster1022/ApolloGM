// material-ui
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 * import { ThemeMode } from 'config';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //
// import IconButton from 'components/@extended/IconButton';
// import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
// import useConfig from 'hooks/useConfig';
import { dispatch, useSelector } from 'store';
import { openDrawer } from 'store/reducers/menu';
import ButtonLogo from '../../assets/images/logo/ButtonLogo.svg';
// import CElogo from '../../assets/images/logo/CE.svg';
import { Box, Typography } from '@mui/material';
const LogoIcon = () => {
  // const theme = useTheme();
  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;
  const handleSubmit = () => {
    dispatch(openDrawer(!drawerOpen));
  };
  return (
    <>
      {drawerOpen ? (
        <a href="#" type="submit" onClick={handleSubmit} style={{ textDecoration: 'none', marginTop: '12px' }}>
          <img src={ButtonLogo} alt="Button" />
        </a>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }} gap={0}>
          <button
            onClick={handleSubmit}
            style={{ backgroundColor: '#008080', borderRadius: '100%', width: '40px', height: '40px', border: 'none', marginTop: '8px' }}
          >
            <img src={ButtonLogo} alt="Button" />
          </button>
          <button
            onClick={handleSubmit}
            style={{ backgroundColor: '#008080', borderRadius: '100%', width: '40px', height: '40px', border: 'none', marginTop: '10px' }}
          >
            <a href="/dashboard-page" style={{ textDecoration: 'none' }}>
              <Typography color="white" variant="h4">
                CE
              </Typography>
            </a>
          </button>
        </Box>
      )}
    </>
  );
};
export default LogoIcon;
