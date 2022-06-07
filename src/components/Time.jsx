import {useEffect, useState} from "react";

export const Time = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      const time = date.toLocaleTimeString("en-GB");
      setTime(time);
    }, 1000);
  });

  return <h3 className="text-xl font-bold">{time}</h3>;
};
