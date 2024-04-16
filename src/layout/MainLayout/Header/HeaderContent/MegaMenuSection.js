import { useRef, useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, ClickAwayListener, List, ListItemButton, ListItemText, Paper, Popper } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';
import { ThemeMode } from 'config';
// assets
import { WindowsOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - MEGA MENU SECTION ||============================== //

const MegaMenuSection = () => {
  const theme = useTheme();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'grey.200' : 'grey.300';
  const iconBackColor = theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <WindowsOutlined />
      </IconButton>
      <Popper
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-80, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position="top-right" in={open} {...TransitionProps}>
            <Paper
              sx={{
                borderRadius: 3,
                boxShadow: theme.customShadows.z1,
                minWidth: 150,
                width: 200,
                maxWidth: 300
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 25 } }}>
                    <ListItemButton>
                      <ListItemText primary="CapEQ Investment Portal" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="CCapEQ Deal Pipeline" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="CapEQ Analytics" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="CapEQ Fund Raising" />
                    </ListItemButton>
                  </List>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default MegaMenuSection;

export const MegaMenuSectionLP = () => {
  const theme = useTheme();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'grey.200' : 'grey.300';
  const iconBackColor = theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <WindowsOutlined />
      </IconButton>
      <Popper
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-80, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position="top-right" in={open} {...TransitionProps}>
            <Paper
              sx={{
                borderRadius: 3,
                boxShadow: theme.customShadows.z1,
                minWidth: 150,
                width: 200,
                maxWidth: 300
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 25 } }}>
                    <ListItemButton>
                      <ListItemText primary="CapEQ Investment Portal" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="CCapEQ Deal Pipeline" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="CapEQ Analytics" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="CapEQ Fund Raising" />
                    </ListItemButton>
                  </List>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};
