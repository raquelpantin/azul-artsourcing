import "./Error.scss";
import error from "../../assets/icons/error_outline_black_18dp.svg";

const Error = () => {
  return (
    <div className="error">
      <img className="error-icon" src={error} alt="Error icon" />
      <p>This field is required</p>
    </div>
  );
};

export default Error;
