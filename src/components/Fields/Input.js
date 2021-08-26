import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTimesCircle,
  faCog
} from "@fortawesome/free-solid-svg-icons";

const Input = (props) => {
  const attributes = { ...props };
  return (
    <>
      {/* <div className="icons-container">
        <FontAwesomeIcon className="icons icon-primary" icon={faCog} />
        <FontAwesomeIcon className="icons icon-danger" icon={faTimesCircle} />
      </div> */}
      <div className="form-control">
        <label htmlFor={attributes.label}>{attributes.label}</label>
        <input
          type={attributes.type}
          value={attributes.value}
          minlength={attributes.minLength}
          maxlenght={attributes.maxLength}
          placeholder={attributes.placeholder}
          title={attributes.title}
          id={attributes.label}
        />
      </div>
    </>
  );
};

export default Input;
