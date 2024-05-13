import dayjs from 'dayjs';

const useGlobalDateContextState = () => {
  const now = dayjs();
  const today = now.startOf('day');

  return {
    now,
    today,
  };
};

export default useGlobalDateContextState;
