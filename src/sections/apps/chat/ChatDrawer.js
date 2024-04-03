import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Chip,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// project imports
import UserAvatar from './UserAvatar';
import UserList from './UserList';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import SimpleBar from 'components/third-party/SimpleBar';

import { ThemeMode } from 'config';
// import useAuth from 'hooks/useAuth';
import One_avartar from '../../../assets/images/users/avatar-1.png';
// assets
import { CheckCircleFilled, ClockCircleFilled, LogoutOutlined, MinusCircleFilled, RightOutlined, SettingOutlined } from '@ant-design/icons';

// ==============================|| CHAT DRAWER ||============================== //

function ChatDrawer({ setUser }) {
  const current_user = {
    name: 'Ri Jong',
    avatar: One_avartar,
    lastMessage: 'How are you doing well?',
    status: 'available'
  };

  const theme = useTheme();
  // const { user } = useAuth();
  const { user } = current_user;

  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const drawerBG = theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'white';

  // show menu to set current user status
  const [anchorEl, setAnchorEl] = useState();
  const handleClickRightMenu = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleCloseRightMenu = () => {
    setAnchorEl(null);
  };

  // set user status on status menu click
  const [status, setStatus] = useState('available');
  const handleRightMenuItemClick = (userStatus) => () => {
    setStatus(userStatus);
    handleCloseRightMenu();
  };

  // const [search, setSearch] = useState('');
  // const handleSearch = async (event) => {
  //   const newString = event?.target.value;
  //   setSearch(newString);
  // };

  return (
    <MainCard
      sx={{
        bgcolor: matchDownLG ? 'transparent' : drawerBG,
        borderRadius: '12px',
        borderRight: 'none'
      }}
      border={!matchDownLG}
      content={false}
    >
      <Box sx={{ p: 6, pb: 1, width: '210px' }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography variant="h5" color="inherit">
              Topics
            </Typography>
            <Chip
              label="50"
              component="span"
              color="secondary"
              sx={{
                // width: 40,
                height: 20,
                borderRadius: '50%',
                '& .MuiChip-label': {
                  px: 0.5
                }
              }}
            />
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ p: 3, pb: 1 }}>
        <Stack spacing={2}>
          <Typography>Direct Message</Typography>
        </Stack>
      </Box>
      <SimpleBar
        sx={{
          overflowX: 'hidden',
          height: matchDownLG ? 'calc(100vh - 420px)' : 'calc(100vh - 428px)',
          minHeight: matchDownLG ? 0 : 420
        }}
      >
        <Box sx={{ p: 3, pt: 0 }}>
          <UserList setUser={setUser} />
        </Box>
      </SimpleBar>
      <Box sx={{ p: 3, pb: 0 }}>
        <List component="nav">
          <ListItemButton divider>
            <ListItemIcon>
              <LogoutOutlined />
            </ListItemIcon>

            <ListItemText primary="LogOut" />
          </ListItemButton>
          <ListItemButton divider>
            <ListItemIcon>
              <SettingOutlined />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Box>
      <Box sx={{ p: 3, pt: 1, pl: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={1} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
              <Grid item>
                <UserAvatar user={{ online_status: status, avatar: current_user.avatar, name: current_user.name }} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Stack sx={{ cursor: 'pointer', textDecoration: 'none' }} component={Link} to="/apps/profiles/user/personal">
                  <Typography align="left" variant="h5" color="textPrimary">
                    {user?.name}
                  </Typography>
                  <Typography align="left" variant="caption" color="textSecondary">
                    {user?.role}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <IconButton onClick={handleClickRightMenu} size="small" color="secondary">
                  <RightOutlined />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseRightMenu}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  sx={{
                    '& .MuiMenu-list': {
                      p: 0
                    },
                    '& .MuiMenuItem-root': {
                      pl: '6px',
                      py: '3px'
                    }
                  }}
                >
                  <MenuItem onClick={handleRightMenuItemClick('available')}>
                    <IconButton
                      size="small"
                      sx={{
                        color: theme.palette.success.main,
                        '&:hover': { color: theme.palette.success.main, bgcolor: 'transparent', transition: 'none', padding: 0 }
                      }}
                    >
                      <CheckCircleFilled />
                    </IconButton>
                    <Typography>Active</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleRightMenuItemClick('offline')}>
                    <IconButton
                      size="small"
                      sx={{
                        color: theme.palette.warning.main,
                        '&:hover': { color: theme.palette.warning.main, bgcolor: 'transparent', transition: 'none', padding: 0 }
                      }}
                    >
                      <ClockCircleFilled />
                    </IconButton>
                    <Typography>Away</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleRightMenuItemClick('do_not_disturb')}>
                    <IconButton
                      size="small"
                      sx={{
                        color: theme.palette.grey[400],
                        '&:hover': { color: theme.palette.grey[400], bgcolor: 'transparent', transition: 'none', padding: 0 }
                      }}
                    >
                      <MinusCircleFilled />
                    </IconButton>
                    <Typography>Do not disturb</Typography>
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
    // </Drawer>
  );
}
ChatDrawer.propTypes = {
  setUser: PropTypes.func
};
export default ChatDrawer;
