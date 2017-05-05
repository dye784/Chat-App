import axios from 'axios';

export const AUTHENTICATED = 'AUTHENTICATED';

export const authenticate = (user) => ({
  type: AUTHENTICATED,
  user,
});

export const login = (email, password) => (dispatch) => {
  axios.post('/api/auth/login', {
    email,
    password,
  })
  .then(res => res.data)
  .then(user => dispatch(authenticate(user)));
};
