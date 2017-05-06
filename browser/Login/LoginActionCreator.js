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
  .then(user => dispatch(authenticate(user)))
  .catch(err => console.error('Login unsuccessful', err));
};

export const logout = () => (dispatch) => {
  axios.delete('/api/auth/logout')
  .then(() => dispatch(authenticate(null)))
  .catch(err => console.error('Logout unsuccessful', err));
};

export const fetchLoggedInUser = () => (dispatch) => {
  axios.get('/api/auth/me')
  .then(res => res.data)
  .then(user => dispatch(authenticate(user)))
  .catch(err => console.error('Fetching logged in user unsuccessful', err));
};
