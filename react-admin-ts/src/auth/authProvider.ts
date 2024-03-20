import { AuthProvider, HttpError } from 'react-admin';

import abpConsts from '../lib/abpConsts';
import tokenAuthService from '../services/tokenAuth/tokenAuthService';
import data from '../users.json';

declare let abp: any;

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: async (loginParams) => {
    const user = data.users[1];
    if (user) {
      // eslint-disable-next-line no-unused-vars
      let { password, ...userToPersist } = user;
      localStorage.setItem('user', JSON.stringify(userToPersist));
    }

    const authenticateRequest = {
      userNameOrEmailAddress: loginParams.username, //'admin@aspnetboilerplate.com',
      password: loginParams.password, //'123qwe',
      rememberClient: true
    };
    const result = await tokenAuthService.authenticate(authenticateRequest);

    if (result.accessToken) {
      const tokenExpireDate = authenticateRequest.rememberClient
        ? new Date(new Date().getTime() + 1000 * result.expireInSeconds)
        : undefined;
      abp.auth.setToken(result.accessToken, tokenExpireDate);
      abp.utils.setCookieValue(
        abpConsts.authorization.encrptedAuthTokenName,
        result.encryptedAccessToken,
        tokenExpireDate,
        abp.appPath
      );

      abp.session.userId = result.userId;

      return Promise.resolve();
    }

    return Promise.reject(new HttpError('Unauthorized', 401, { message: 'Invalid username or password' }));
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.clear();
    sessionStorage.clear();
    abp.auth.clearToken();

    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('user');

      return Promise.reject();
    }

    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    if (!abp.session.userId) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(undefined),
  getIdentity: () => {
    const persistedUser = localStorage.getItem('user');
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  }
};

export default authProvider;
