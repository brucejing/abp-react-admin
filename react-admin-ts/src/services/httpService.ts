import axios from 'axios';
import * as qs from 'qs';
import { toast } from 'react-toastify';

import appConsts from '../lib/abpConsts';
import { L } from '../lib/abpUtils';

declare let abp: any;

const httpService = axios.create({
  baseURL: appConsts.remoteServiceBaseUrl,
  timeout: 30000,
  paramsSerializer(params) {
    return qs.stringify(params, {
      encode: false
    });
  }
});

httpService.interceptors.request.use(
  (config) => {
    const token = abp.auth.getToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    config.headers['.AspNetCore.Culture'] = abp.utils.getCookieValue('Abp.Localization.CultureName');
    config.headers['Abp.TenantId'] = abp.multiTenancy.getTenantIdCookie();

    return config;
  },
  (error) => Promise.reject(error)
);

httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      !!error.response &&
      !!error.response.data.error &&
      !!error.response.data.error.message &&
      error.response.data.error.details
    ) {
      toast.error(error.response.data.error.message);
    } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
      toast.error(error.response.data.error.message);
    } else if (!error.response) {
      toast.error(L('UnknownError'));
    }

    return Promise.reject(error);
  }
);

export default httpService;
