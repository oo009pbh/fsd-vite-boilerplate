import { useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { useState } from 'react';

const useGlobalSystemContextState = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathNameArray = location.pathname.split('/');
  const [isShowHoliday, setIsShowHoliday] = useState<boolean>(false);

  return {
    location,
    pathNameArray,
    navigate,
    _,
    setIsShowHoliday,
    isShowHoliday,
  };
};

export default useGlobalSystemContextState;
