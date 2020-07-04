import { useState } from 'react';

export default useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    // error returned from apisauce
    if (!response.ok) return setError(true);

    // no errors
    setError(false);
    // set listings data to state
    setData(response.data);
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
