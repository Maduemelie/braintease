import { useEffect } from 'react';

const Timer = ({ state, dispatch }) => {
  const min = Math.floor(state.timeRemaining / 60);
  const sec = state.timeRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'UPDATE_TIMER' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
};

export default Timer;
