import { create } from 'apisauce';
import cache from '../utility/cache';
import authStorage from '../auth/storage';

const apiClient = create({
  baseURL: 'http://192.168.1.162:9000/api',
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;

  request.headers['x-auth-token'] = authToken;
});

const get = apiClient.get;
// refined original method so we can look for data in cache if we
// can call the server
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
