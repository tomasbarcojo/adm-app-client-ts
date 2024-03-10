import { useLocation, useNavigate } from 'react-router-dom';

export function useQueryParams() {
  const history = useLocation();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(history.search);

  const setParam = (paramName, paramValue) => {
    urlParams.set(paramName, paramValue);
    const pathName = history.pathname;
    const newRoute = `${pathName}?${urlParams.toString()}`;
    navigate(newRoute, { replace: true });
  };

  const getObject = () => {
    const result = {};
    urlParams.forEach((value, key) => {
      result[key] = value;
    });

    return result;
  };

  return {
    params: getObject(),
    setParam
  };
}
