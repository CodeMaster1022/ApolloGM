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
const LogoIcon = () => {
  // const theme = useTheme();
  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;
  const handleSubmit = () => {
    dispatch(openDrawer(!drawerOpen));
  };
  return (
    <a href="#" type="submit" onClick={handleSubmit} style={{ textDecoration: 'none', marginTop: '12px' }}>
      <img src={ButtonLogo} alt="Button" />
    </a>
  );
};

export default LogoIcon;
