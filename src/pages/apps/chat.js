import ChatDrawer from 'sections/apps/chat/ChatDrawer';
// import One_avartar from '../../assets/images/users/avatar-1.png';
// import Two_avartar from '../../assets/images/users/avatar-2.png';
// import Third_avartar from '../../assets/images/users/avatar-3.png';
import { useEffect, useRef, useState } from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// material-ui
import { useTheme } from '@mui/material/styles';
// import { ThemeMode } from 'config';
// import EmojiPicker, { SkinTones } from 'emoji-picker-react';
import InputEmoji from 'react-input-emoji';
import UserAvatar from 'sections/apps/chat/UserAvatar';
// import UserList from 'sections/apps/chat/UserList';
// import { Tree, TreeNode } from 'react-organizational-chart';
// import InputAdornment from '@mui/material/InputAdornment';
import SimpleBar from 'components/third-party/SimpleBar';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import MainCard from 'components/MainCard';

import { dispatch, useSelector } from 'store';
// import { openDrawer } from 'store/reducers/menu';
import { openSnackbar } from 'store/reducers/snackbar';
import { insertChat } from 'store/reducers/chat';
import { openDrawer } from 'store/reducers/menu';

const Chat = () => {
  const theme = useTheme();

  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  // const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
  //setUser
  // const [data, setData] = useState([]);
  const [currentUser, setUser] = useState('');
  const { chats, user } = useSelector((state) => state.chat);
  const [openChatDrawer, setOpenChatDrawer] = useState(true);
  useEffect(() => {
    setUser(user);
  }, [user]);
  useEffect(() => {
    dispatch(openDrawer(false));
  }, []);
  useEffect(() => {
    setOpenChatDrawer(!matchDownSM);
  }, [matchDownSM]);
  //Chat Message
  const [message, setMessage] = useState('');
  const textInput = useRef(null);

  const handleOnSend = () => {
    if (message.trim() === '') {
      console.log('This is trime');
      dispatch(
        openSnackbar({
          open: true,
          message: 'Message required',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: false
        })
      );
    } else {
      const d = new Date();
      const newMessage = {
        from: 'User1',
        to: currentUser.name,
        text: message,
        time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      // setData((prevState) => [...prevState, newMessage]);
      dispatch(insertChat(newMessage));
    }
    setMessage('');
  };
  const handleDrawerOpen = () => {
    setOpenChatDrawer((prevState) => !prevState);
  };

  const handleEnter = () => {
    console.log(message, 'ddd');
    handleOnSend();
  };
  useEffect(() => {
    console.log(message, 'this is message');
  }, [message]);
  return (
    <>
      <Box sx={{ display: 'flex', borderRadius: '12px', width: '100%' }} gap={2}>
        <ChatDrawer openChatDrawer={openChatDrawer} handleDrawerOpen={handleDrawerOpen} setUser={setUser} />
        <SimpleBar
          sx={{
            overflowX: 'hidden',
            height: 'calc(100vh - 20px)',
            minHeight: 420
          }}
        >
          <Box sx={{ pl: 1, pr: 3 }}>
            <MainCard
              content={false}
              sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#008080' : 'white'),
                borderRadius: '12px',
                width: '100%'
                // transition: theme.transitions.create('width', {
                //   easing: theme.transitions.easing.easeOut,
                //   duration: theme.transitions.duration.shorter + 200
                // })
              }}
            >
              {chats.map((chat, index) => (
                <Stack key={index}>
                  <Grid
                    container
                    spacing={0}
                    sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#008080' : 'white') }}
                    borderRadius="12px"
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        // bgcolor: theme.palette.background.paper,
                        pr: 2,
                        pb: 2
                      }}
                    >
                      <Grid container display="flex" direction="column" padding={2}>
                        <Grid item>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <UserAvatar
                              user={{
                                online_status: chat.online_status,
                                avatar: chat.avatar,
                                name: chat.name
                              }}
                            />
                            <Stack>
                              <Typography fontSize="14px" fontWeight="bold">
                                {chat.name}
                              </Typography>
                              <Typography variant="caption" color="textSecondary">
                                Active {chat.lastMessage}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ paddingTop: '15px' }}>
                          <Stack direction="column" alignItems="left" spacing={5}>
                            <Typography fontSize="12px" color="#008080">
                              View {chat.post.repliers.length}previous replies
                            </Typography>
                            {chat.post.repliers.map((replier, index) => (
                              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                                <UserAvatar
                                  user={{
                                    online_status: replier.online_status,
                                    avatar: replier.avatar,
                                    name: replier.name
                                  }}
                                />
                                <Stack>
                                  <Typography fontSize="14px" fontWeight="bold">
                                    {replier.name}
                                  </Typography>
                                  <Typography variant="caption" color="textSecondary">
                                    Active {replier.sentMessage}
                                  </Typography>
                                </Stack>
                              </Stack>
                            ))}
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 3, bgcolor: theme.palette.background.paper }}>
                          <Stack>
                            <InputEmoji
                              inputRef={textInput}
                              // value={message}
                              onChange={setMessage}
                              cleanOnenter
                              onEnter={handleEnter}
                              // onEnter={handleOnSend}
                              placeholder="Add apply..."
                              background="#F4F4F4"
                            />
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>
              ))}
            </MainCard>
          </Box>
        </SimpleBar>
      </Box>
      {/* <UserList /> */}
      {/* {
      users.map((user,index) => (
        <UserAvatar user={user} />
      ))
    } */}
    </>
  );
};

export default Chat;
