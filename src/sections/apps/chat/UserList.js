import PropTypes from 'prop-types';
import { Fragment } from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { Divider, List, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';

// third-party
// import { Chance } from 'chance';

// project imports
import UserAvatar from './UserAvatar';
// import Dot from 'components/@extended/Dot';
import { useSelector } from 'store';
// import { getUsers } from 'store/reducers/chat';

// assets
// import { CheckOutlined } from '@ant-design/icons';

// import One_avartar from '../../../assets/images/users/avatar-1.png'
// import Two_avartar from '../../../assets/images/users/avatar-2.png'
// import Third_avartar from '../../../assets/images/users/avatar-3.png'

// const chance = new Chance();
// const users = [
//   {
//     name:"Ri Jong",
//     avatar:One_avartar,
//     lastMessage:"How are you doing well?",
//     online_status:'available'
//   },
//   {
//     name:"Ri Jong",
//     avatar:Two_avartar,
//     lastMessage:"How are you doing well?",
//     online_status:'available'
//   },
//   {
//     name:"Ri Sol",
//     avatar:Third_avartar,
//     lastMessage:"How are you doing well?",
//     online_status:'available'
//   },

function UserList({ setUser }) {
  const { users } = useSelector((state) => state.chat);
  return (
    <List component="nav">
      {users.map((user) => (
        <Fragment key={user.id}>
          <ListItemButton
            sx={{ pl: 1 }}
            onClick={() => {
              setUser(user);
            }}
          >
            <ListItemAvatar>
              <UserAvatar user={user} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Stack component="span" direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                  <Typography
                    variant="h5"
                    color="inherit"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {user.name}
                  </Typography>
                </Stack>
              }
              // secondary={
              //   <Stack component="span" direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              //     <Typography
              //       variant="caption"
              //       color="textSecondary"
              //       sx={{
              //         overflow: 'hidden',
              //         textOverflow: 'ellipsis',
              //         whiteSpace: 'nowrap'
              //       }}
              //     >
              //       {user.status}
              //     </Typography>
              //     {user.unReadChatCount ? (
              //       <Dot color="primary" />
              //     ) : (
              //       // chance.bool() - use for last send msg was read or unread
              //       <CheckOutlined style={{ color: chance.bool() ? theme.palette.grey[400] : theme.palette.primary.main }} />
              //     )}
              //   </Stack>
              // }
            />
          </ListItemButton>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
}

UserList.propTypes = {
  setUser: PropTypes.func,
  search: PropTypes.string
};

export default UserList;
