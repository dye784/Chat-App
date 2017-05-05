export const AUTHENTICATED = 'AUTHENTICATED';

export const authenticate = (user) => ({
  type: AUTHENTICATED,
  user,
});
