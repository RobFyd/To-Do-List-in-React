import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled.js";

const Clock = () => {
  const { date } = useCurrentDate();

  const formatDate = date.toLocaleString("en-EN", {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return <StyledClock>Today is {formatDate}</StyledClock>;
};

export { Clock };
