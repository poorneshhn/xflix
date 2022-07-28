import "./displayerror.css";
const DisplayError = (props) => {
  return <h2 className="error-message">{props.errorMessage}</h2>;
};

export default DisplayError;
