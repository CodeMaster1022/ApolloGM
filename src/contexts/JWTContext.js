import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// third-party
import { Chance } from 'chance';
// import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/reducers/actions';
import authReducer from 'store/reducers/auth';

// project import
import Loader from 'components/Loader';
import axios from 'utils/axios';

const chance = new Chance();

// constant
const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  // const decoded = jwtDecode(serviceToken);
  /**
   * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
   */
  // return decoded.exp > Date.now() / 1000;
  return true;
};

const setSession = (serviceToken) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    console.log('this is setSeesion');
    // axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    console.log('this is setSeesion');
    localStorage.removeItem('serviceToken');
    // delete axios.defaults.headers.common.Authorization;
  }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //

const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('serviceToken');
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          // const response = await axios.get('/api/account/me');
          // const { user } = response.data;
          // console.log(user, 'user information');
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true
              // user
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, []);

  const login = async (email, password) => {
    console.log(email, password);
    let users = {};
    // const response = await axios.post('/api/account/login', { email, password });
    // const { serviceToken, user } = response.data;
    if (email === 'info@codedthemes.com' && password === '123456') {
      setSession('sdfdsfas');
      users = {
        name: 'Jhon',
        role: 1
      };
      localStorage.setItem('user', JSON.stringify(users));
      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIn: false,
          user: users
        }
      });
    } else if (email === 'CodeMaster.Han1022@gmail.com' && password === '123456') {
      setSession('2dfaheawbew');
      users = {
        name: 'James',
        role: 2
      };
      localStorage.setItem('user', JSON.stringify(users));
      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIn: false,
          user: users
        }
      });
    } else {
      setSession(null);
    }
  };

  const register = async (email, password, firstName, lastName) => {
    // todo: this flow need to be recode as it not verified
    const id = chance.bb_pin();
    const response = await axios.post('/api/account/register', {
      id,
      email,
      password,
      firstName,
      lastName
    });
    let users = response.data;

    if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
      const localUsers = window.localStorage.getItem('users');
      users = [
        ...JSON.parse(localUsers),
        {
          id,
          email,
          password,
          name: `${firstName} ${lastName}`
        }
      ];
    }

    window.localStorage.setItem('users', JSON.stringify(users));
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async () => {};

  const updateProfile = () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile }}>{children}</JWTContext.Provider>;
};

JWTProvider.propTypes = {
  children: PropTypes.node
};

export default JWTContext;
