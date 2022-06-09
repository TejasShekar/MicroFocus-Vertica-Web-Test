import {useEffect, useState} from "react";

export const Time = () => {
  const [time, setTime] = useState(() => {
    const date = new Date();
    return date.toLocaleTimeString("en-GB");
  });

  useEffect(() => {
    const timerID = setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString("en-GB");
      setTime(time);
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <h3 className="text-xl font-bold">{time}</h3>;
};
