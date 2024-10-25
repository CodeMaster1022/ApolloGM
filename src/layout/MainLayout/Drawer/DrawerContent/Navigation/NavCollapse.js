import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Collapse,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
  useMediaQuery
} from '@mui/material';

// project import
import NavItem from './NavItem';
import Dot from 'components/@extended/Dot';
import SimpleBar from 'components/third-party/SimpleBar';
import Transitions from 'components/@extended/Transitions';

import useConfig from 'hooks/useConfig';
import { dispatch, useSelector } from 'store';
import { activeItem } from 'store/reducers/menu';
import { MenuOrientation, ThemeMode } from 'config';

// assets
import { BorderOutlined, DownOutlined, UpOutlined, RightOutlined } from '@ant-design/icons';

// mini-menu - wrapper
const PopperStyled = styled(Popper)(({ theme }) => ({
  overflow: 'visible',
  zIndex: 1202,
  minWidth: 180,
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 38,
    left: -5,
    width: 10,
    height: 10,
    backgroundColor: theme.palette.background.paper,
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 120,
    borderLeft: `1px solid ${theme.palette.grey.A800}`,
    borderBottom: `1px solid ${theme.palette.grey.A800}`
  }
}));

// ==============================|| NAVIGATION - LIST COLLAPSE ||============================== //

const NavCollapse = ({ menu, level, parentId, setSelectedItems, selectedItems, setSelectedLevel, selectedLevel }) => {
  const theme = useTheme();

  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const menuState = useSelector((state) => state.menu);

  const { drawerOpen } = menuState;
  const { menuOrientation } = useConfig();
  const navigation = useNavigate();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(null);
    setSelectedLevel(level);
    if (drawerOpen) {
      setOpen(!open);
      setSelected(!selected ? menu.id : null);
      setSelectedItems(!selected ? menu.id : '');
      if (menu.url) navigation(`${menu.url}`);
    } else {
      setAnchorEl(event?.currentTarget);
    }
  };

  const handlerIconLink = () => {
    if (!drawerOpen) {
      if (menu.url) navigation(`${menu.url}`);
      setSelected(menu.id);
    }
  };

  const handleHover = (event) => {
    setAnchorEl(event?.currentTarget);
    if (!drawerOpen) {
      setSelected(menu.id);
    }
  };

  const miniMenuOpened = Boolean(anchorEl);

  const handleClose = () => {
    setOpen(false);
    if (!miniMenuOpened) {
      if (!menu.url) {
        setSelected(null);
      }
    }
    setAnchorEl(null);
  };

  useMemo(() => {
    if (selected === selectedItems) {
      if (level === 1) {
        setOpen(true);
      }
    } else {
      if (level === selectedLevel) {
        setOpen(false);
        if (!miniMenuOpened && !drawerOpen && !selected) {
          setSelected(null);
        }
        if (drawerOpen) {
          setSelected(null);
        }
      }
    }
  }, [selectedItems, level, selected, miniMenuOpened, drawerOpen, selectedLevel]);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === menu.url) {
      setSelected(menu.id);
    }
    // eslint-disable-next-line
  }, [pathname]);

  const checkOpenForParent = (child, id) => {
    child.forEach((item) => {
      if (item.url === pathname) {
        setOpen(true);
        setSelected(id);
      }
    });
  };

  useEffect(() => {
    setOpen(false);
    if (!miniMenuOpened) {
      setSelected(null);
    }
    if (miniMenuOpened) setAnchorEl(null);
    if (menu.children) {
      menu.children.forEach((item) => {
        if (item.children?.length) {
          checkOpenForParent(item.children, menu.id);
        }
        if (pathname && pathname.includes('product-details')) {
          if (item.url && item.url.includes('product-details')) {
            setSelected(menu.id);
            setOpen(true);
          }
        }
        if (item.url === pathname) {
          setSelected(menu.id);
          setOpen(true);
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, menu.children]);

  useEffect(() => {
    if (menu.url === pathname) {
      dispatch(activeItem({ openItem: [menu.id] }));
      setSelected(menu.id);
      setAnchorEl(null);
      setOpen(true);
    }
  }, [pathname, menu]);

  const navCollapse = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return (
          <NavCollapse
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            menu={item}
            level={level + 1}
            parentId={parentId}
          />
        );
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Collapse or Item
          </Typography>
        );
    }
  });

  const isSelected = selected === menu.id;
  const borderIcon = level === 1 ? <BorderOutlined style={{ fontSize: '1rem' }} /> : false;
  const Icon = menu.icon;
  const menuIcon = menu.icon ? <Icon style={{ fontSize: drawerOpen ? '1.25rem' : '1.25rem' }} /> : borderIcon;
  //com
  const textColor = theme.palette.mode === ThemeMode.DARK ? 'grey.400' : 'white';
  const iconSelectedColor = theme.palette.mode === ThemeMode.DARK && drawerOpen ? 'white' : 'white';
  const popperId = miniMenuOpened ? `collapse-pop-${menu.id}` : undefined;
  const FlexBox = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' };

  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <>
          <ListItemButton
            disableRipple
            selected={selected === menu.id}
            {...(!drawerOpen && { onMouseEnter: handleClick, onMouseLeave: handleClose })}
            onClick={handleClick}
            sx={{
              pl: drawerOpen ? `${level * 28}px` : 1.5,
              py: !drawerOpen && level === 1 ? 1.25 : 1,
              ...(drawerOpen && {
                '&:hover': {
                  bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : '#008080'
                },
                '&.Mui-selected': {
                  bgcolor: 'transparent',
                  color: iconSelectedColor,
                  '&:hover': { color: iconSelectedColor, bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'transparent' }
                }
              }),
              ...(!drawerOpen && {
                '&:hover': {
                  bgcolor: 'transparent'
                },
                '&.Mui-selected': {
                  '&:hover': {
                    bgcolor: 'transparent'
                  },
                  bgcolor: '#008080'
                }
              })
            }}
          >
            {menuIcon && (
              <ListItemIcon
                onClick={handlerIconLink}
                sx={{
                  minWidth: 28,
                  color: selected === menu.id ? 'white' : textColor,
                  ...(!drawerOpen && {
                    borderRadius: 1.5,
                    width: 36,
                    height: 36,
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter'
                    }
                  }),
                  ...(!drawerOpen &&
                    selected === menu.id && {
                      bgcolor: theme.palette.mode === ThemeMode.DARK ? 'white' : 'primary.lighter',
                      '&:hover': {
                        bgcolor: theme.palette.mode === ThemeMode.DARK ? 'white' : 'primary.lighter'
                      }
                    })
                }}
              >
                {menuIcon}
              </ListItemIcon>
            )}
            {(drawerOpen || (!drawerOpen && level !== 1)) && (
              <ListItemText
                primary={
                  <Typography variant="h6" color={selected === menu.id ? 'white' : textColor}>
                    &nbsp;&nbsp;&nbsp;{menu.title}
                  </Typography>
                }
                secondary={
                  menu.caption && (
                    <Typography variant="caption" color="secondary">
                      &nbsp;&nbsp;&nbsp;{menu.caption}
                    </Typography>
                  )
                }
              />
            )}
            {(drawerOpen || (!drawerOpen && level !== 1)) &&
              (miniMenuOpened || open ? (
                <UpOutlined style={{ fontSize: '0.625rem', marginLeft: 1, color: 'white' }} />
              ) : (
                <DownOutlined style={{ fontSize: '0.625rem', marginLeft: 1, color: 'white' }} />
              ))}

            {!drawerOpen && (
              <PopperStyled
                open={miniMenuOpened}
                anchorEl={anchorEl}
                placement="right-start"
                style={{
                  zIndex: 2001
                }}
                popperOptions={{
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [-12, 1]
                      }
                    }
                  ]
                }}
              >
                {({ TransitionProps }) => (
                  <Transitions in={miniMenuOpened} {...TransitionProps}>
                    <Paper
                      sx={{
                        overflow: 'hidden',
                        mt: 1.5,
                        boxShadow: theme.customShadows.z1,
                        backgroundImage: 'none',
                        border: `1px solid ${theme.palette.divider}`
                      }}
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <SimpleBar
                          sx={{
                            backgroundColor: '#009080',
                            overflowX: 'hidden',
                            overflowY: 'auto',
                            maxHeight: 'calc(100vh - 170px)'
                          }}
                        >
                          {navCollapse}
                        </SimpleBar>
                      </ClickAwayListener>
                    </Paper>
                  </Transitions>
                )}
              </PopperStyled>
            )}
          </ListItemButton>
          {drawerOpen && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List sx={{ p: 0 }}>{navCollapse}</List>
            </Collapse>
          )}
        </>
      ) : (
        <>
          <ListItemButton
            id={`boundary-${popperId}`}
            disableRipple
            selected={isSelected}
            onMouseEnter={handleHover}
            onMouseLeave={handleClose}
            onClick={handleHover}
            aria-describedby={popperId}
            sx={{
              '&.Mui-selected': {
                bgcolor: 'balck'
              }
            }}
          >
            <Box onClick={handlerIconLink} sx={FlexBox}>
              {menuIcon && (
                <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36, color: theme.palette.secondary.dark }}>
                  {menuIcon}
                </ListItemIcon>
              )}
              {!menuIcon && level !== 1 && (
                <ListItemIcon
                  sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36, bgcolor: 'transparent', '&:hover': { bgcolor: '#008080' } }}
                >
                  <Dot size={4} color={isSelected ? 'primary' : 'secondary'} />
                </ListItemIcon>
              )}
              <ListItemText
                primary={
                  <Typography variant="body1" color="inherit" sx={{ my: 'auto' }}>
                    &nbsp;&nbsp;&nbsp;{menu.title}
                  </Typography>
                }
              />
              {miniMenuOpened ? <RightOutlined /> : <DownOutlined />}
            </Box>

            {anchorEl && (
              <PopperStyled
                id={popperId}
                open={miniMenuOpened}
                anchorEl={anchorEl}
                placement="right-start"
                style={{
                  zIndex: 2001
                }}
                modifiers={[
                  {
                    name: 'offset',
                    options: {
                      offset: [-10, 0]
                    }
                  }
                ]}
              >
                {({ TransitionProps }) => (
                  <Transitions in={miniMenuOpened} {...TransitionProps}>
                    <Paper
                      sx={{
                        overflow: 'hidden',
                        mt: 1.5,
                        py: 0.5,
                        boxShadow: theme.shadows[8],
                        backgroundImage: 'none'
                      }}
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <SimpleBar
                          sx={{
                            overflowX: 'hidden',
                            overflowY: 'auto',
                            maxHeight: 'calc(100vh - 170px)'
                          }}
                        >
                          {navCollapse}
                        </SimpleBar>
                      </ClickAwayListener>
                    </Paper>
                  </Transitions>
                )}
              </PopperStyled>
            )}
          </ListItemButton>
        </>
      )}
    </>
  );
};

NavCollapse.propTypes = {
  menu: PropTypes.object,
  level: PropTypes.number,
  parentId: PropTypes.string,
  setSelectedItems: PropTypes.func,
  selectedItems: PropTypes.string,
  setSelectedLevel: PropTypes.func,
  selectedLevel: PropTypes.number
};

export default NavCollapse;
