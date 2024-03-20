import queryString from 'query-string';
import { DataProvider } from 'react-admin';

import httpService from '../services/httpService';

export default (apiUrl: string): DataProvider => ({
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter)
    };
    const url = `${apiUrl}/${resource}?${queryString.stringify(query)}`;

    const response = await httpService.get(url);

    return {
      data: response.data.result.items,
      total: response.data.result.totalCount
    };
  },

  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpService.get(url);
    return { data: json };
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids })
    };
    const url = `${apiUrl}/${resource}?${queryString.stringify(query)}`;
    const { json } = await httpService(url);
    return { data: json };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    };
    const url = `${apiUrl}/${resource}?${queryString.stringify(query)}`;
    const { json, headers } = await httpService(url);
    return {
      data: json,
      total: parseInt(json.result.totalCount, 10)
    };
  },

  create: async (resource, params) => {
    const { json } = await httpService(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data)
    });
    return { data: json };
  },

  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpService(url, {
      method: 'PUT',
      body: JSON.stringify(params.data)
    });
    return { data: json };
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    const url = `${apiUrl}/${resource}?${queryString.stringify(query)}`;
    const { json } = await httpService(url, {
      method: 'PUT',
      body: JSON.stringify(params.data)
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpService(url, {
      method: 'DELETE'
    });
    return { data: json };
  },

  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    const url = `${apiUrl}/${resource}?${queryString.stringify(query)}`;
    const { json } = await httpService(url, {
      method: 'DELETE',
      body: JSON.stringify(params)
    });
    return { data: json };
  }
});
