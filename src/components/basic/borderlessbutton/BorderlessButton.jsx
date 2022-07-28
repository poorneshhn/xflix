import "./borderlessbutton.css";

export const BorderlessButton = (props) => {
  return (
    <button onClick={props.onClick} className="borderless-button">
      {props.title}
    </button>
  );
};
