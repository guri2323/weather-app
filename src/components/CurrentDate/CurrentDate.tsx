import { getCurrentDate } from "../../utils";
import "./CurrentDate.css";

const CurrentDate = () => {
  return (
    <div className="date">
      <span>{getCurrentDate()}</span>
    </div>
  );
};

export default CurrentDate;
