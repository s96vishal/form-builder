import { useRef, useState } from "react";
import ReactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SettingModal = ({ showModal, onClose, isInput }) => {
  const nameRef = useRef();
  const typeRef = useRef();
  const labelRef = useRef();
  const placeholderRef = useRef();
  const defaultvalueRef = useRef();
  const [required, setRequired] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [options, setOptions] = useState([]);

  const onClickHandler = (eventName) => {
    if (eventName === "close") {
      setOptions([]);
      onClose(null);
    }
    if (eventName === "save") {
      const fieldData = {
        title: nameRef.current.value,
        type: typeRef.current.value,
        label: labelRef.current.value,
        placeholder: placeholderRef.current.value,
        defaultValue: defaultvalueRef.current.value,
        readOnly: readOnly,
        required: required
      };
      onClose(fieldData);
    }
  };
  const addOptionHandler = () => {
    const updatedOptions = options.slice();

    updatedOptions.push(
      <div className="options-control">
        <input ref={placeholderRef} type="text" placeholder="Title" />
        <input ref={placeholderRef} type="text" placeholder="Value" />
      </div>
    );
    setOptions(updatedOptions);
  };
  return ReactDom.createPortal(
    <>
      {showModal ? (
        <div className="backdrop">
          <div className="modal">
            <FontAwesomeIcon
              className="close-modal"
              icon={faTimesCircle}
              onClick={() => {
                onClickHandler("close");
              }}
            ></FontAwesomeIcon>
            <h1 className="modal-heading">field settings</h1>
            <div className="modal-content">
              <form>
                <div className="form-control">
                  <label htmlFor="name">Name</label>
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Enter Field Name"
                  />
                </div>
                <div
                  className="form-control"
                  style={{
                    display: !isInput ? "none" : ""
                  }}
                >
                  <label htmlFor="type">Type</label>
                  <select name="type" id="type" ref={typeRef}>
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="email">Email</option>
                  </select>
                </div>
                <div
                  className="form-control"
                  style={{
                    display: isInput ? "" : "none"
                  }}
                >
                  <label htmlFor="name">label Title</label>
                  <input ref={labelRef} type="text" placeholder="Enter Label" />
                </div>
                <div className="form-control">
                  <label htmlFor="name">Placeholder</label>
                  <input
                    ref={placeholderRef}
                    type="text"
                    placeholder="Enter Placeholder value"
                  />
                </div>
                <div
                  className="form-control"
                  style={{
                    display: isInput ? "" : "none"
                  }}
                >
                  <label htmlFor="name">Default Value</label>
                  <input
                    ref={defaultvalueRef}
                    type="text"
                    placeholder="Enter Default value"
                  />
                </div>
                <div
                  className="input-checkbox-control"
                  style={{
                    display: isInput ? "" : "none"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={required}
                    onChange={() => {
                      setRequired(!required);
                    }}
                    id="required"
                  />
                  <label htmlFor="required">Required</label>
                </div>
                <div
                  className="input-checkbox-control"
                  style={{
                    display: isInput ? "" : "none"
                  }}
                >
                  <input
                    type="checkbox"
                    onChange={() => {
                      setReadOnly(!readOnly);
                    }}
                    id="readOnly"
                  />
                  <label htmlFor="readOnly">Read Only</label>
                </div>
                <div
                // className="form-control"
                // style={{
                //   display: isInput ? "" : "none"
                // }}
                >
                  <div>
                    <label htmlFor="name">Options</label>
                    {options.map((option) => option)}
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={addOptionHandler}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={() => {
                  onClickHandler("save");
                }}
              >
                save
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  onClickHandler("close");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default SettingModal;
