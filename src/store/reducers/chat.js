// third-party
import { createSlice } from '@reduxjs/toolkit';
import One_avartar from '../../assets/images/users/avatar-1.png';
import Two_avartar from '../../assets/images/users/avatar-2.png';
import Third_avartar from '../../assets/images/users/avatar-3.png';
// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  chats: [
    {
      id: 1,
      name: 'Tomson',
      avatar: One_avartar,
      lastMessage: 'How are you doing well?',
      online_status: 'available',
      Date: 'April 15, 2023',
      post: {
        category: 'Technology',
        repliers: [
          {
            name: 'Annette Black',
            avatar: Two_avartar,
            sentMessage: 'Tempor incididunt ut labore',
            Date: 'April 15, 2023'
          },
          {
            name: 'Annette Black',
            avatar: Third_avartar,
            sentMessage: 'Tempor incididunt ut labore',
            Date: 'April 15, 2023'
          }
        ]
      }
    },
    {
      id: 2,
      name: 'Annette Black',
      avatar: One_avartar,
      lastMessage: 'How are you doing well?',
      online_status: 'available',
      Date: 'April 15, 2023',
      post: {
        category: 'Technology',
        repliers: [
          {
            name: 'Annette Black',
            avatar: Two_avartar,
            sentMessage: 'Tempor incididunt ut labore',
            Date: 'April 15, 2023'
          },
          {
            name: 'Annette Black',
            avatar: Third_avartar,
            sentMessage: 'Tempor incididunt ut labore',
            Date: 'April 15, 2023'
          },
          {
            name: 'Annette Black',
            avatar: Third_avartar,
            sentMessage: 'Tempor incididunt ut labore',
            Date: 'April 15, 2023'
          }
        ]
      }
    },
    {
      id: 3,
      name: 'Annette Black',
      avatar: One_avartar,
      lastMessage: 'How are you doing well?',
      online_status: 'available',
      Date: 'April 15, 2023',
      post: {
        category: 'Technology',
        repliers: [
          {
            name: 'Annette Black',
            avatar: Two_avartar,
            sentMessage: 'Tempor incididunt ut labore',
            Date: 'April 15, 2023'
          },
          {
            name: 'Annette Black',
            avatar: Third_avartar,
            sentMessage: 'Tempor incididunt ut labore',
            Date: 'April 15, 2023'
          }
        ]
      }
    }
  ],
  user: {
    name: 'Admin',
    avatar: One_avartar,
    lastMessage: 'How are you doing well?',
    online_status: 'available',
    Date: 'April 15, 2023',
    post: {
      category: 'Technology',
      repliers: [
        {
          name: 'Annette Black',
          avatar: Two_avartar,
          sentMessage: 'Tempor incididunt ut labore',
          Date: 'April 15, 2023'
        },
        {
          name: 'Annette Black',
          avatar: Third_avartar,
          sentMessage: 'Tempor incididunt ut labore',
          Date: 'April 15, 2023'
        }
      ]
    }
  },
  users: [
    {
      id: '1',
      name: 'James Black',
      avatar: One_avartar,
      lastMessage: 'How are you doing well?',
      online_status: 'available'
    },
    {
      id: '2',
      name: 'Smith Ben',
      avatar: Two_avartar,
      lastMessage: 'How are you doing well?',
      online_status: 'available'
    },
    {
      id: '3',
      name: 'Soroa',
      avatar: Third_avartar,
      lastMessage: 'How are you doing well?',
      online_status: 'available'
    }
  ]
};

const chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // HAS ERROR
    // hasError(state, action) {
    //   state.error = action.payload;
    // },
    // // GET USER
    // getUserSuccess(state, action) {
    //   state.user = action.payload;
    // },
    // // GET USER CHATS
    // getUserChatsSuccess(state, action) {
    //   state.chats = action.payload;
    // },
    // // GET USERS
    // getUsersSuccess(state, action) {
    //   state.users = action.payload;
    // }
  }
});

// Reducer
export default chat.reducer;

// ----------------------------------------------------------------------

export function getUser(id) {
  return async () => {
    try {
      const response = await axios.post('/api/chat/users/id', { id });
      dispatch(chat.actions.getUserSuccess(response.data));
    } catch (error) {
      dispatch(chat.actions.hasError(error));
    }
  };
}

export function getUserChats(user) {
  return async () => {
    try {
      const response = await axios.post('/api/chat/filter', { user });
      dispatch(chat.actions.getUserChatsSuccess(response.data));
    } catch (error) {
      dispatch(chat.actions.hasError(error));
    }
  };
}

export function insertChat(chat) {
  return async () => {
    try {
      await axios.post('/api/chat/insert', chat);
    } catch (error) {
      dispatch(chat.actions.hasError(error));
    }
  };
}

export function getUsers() {
  return async () => {
    try {
      const response = await axios.get('/api/chat/users');
      dispatch(chat.actions.getUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(chat.actions.hasError(error));
    }
  };
}
