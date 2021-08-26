import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTimesCircle,
  faCog
} from "@fortawesome/free-solid-svg-icons";

import DateTime from "./Fields/DateTime";
import Input from "./Fields/Input";
import { FIELDS } from "./constants";
import SelectField from "./Fields/SelectField";
import Radio from "./Fields/RadioButtons";
import Checkbox from "./Fields/Checkbox";
import TextArea from "./Fields/TextArea";
import Preview from "./Preview";
import SettingModal from "../UI/SettingModal";

const FormBuilder = () => {
  const [formField, setFormField] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const templateName = useRef();
  const [builderMode, setBuilderMode] = useState(true);
  const changeMode = () => {
    setBuilderMode(!builderMode);
  };
  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = (data) => {
    console.log("MODAL DATA", data);
    setShowModal(false);
  };
  const clearHandler = () => {
    setFormField([]);
  };
  const saveHandler = (e) => {
    e.preventDefault();
    const data = {
      templateName: templateName.current.value,
      fields: formField
    };
    console.log(data);
  };
  const removeField = (id) => {
    const updatedFormfield = formField.filter((field) => field.id !== id);
    setFormField(updatedFormfield);
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
  };
  const onDropHandler = (e) => {
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const newFormFieldArray = formField.slice();
    let field = {
      ...data,
      label: data.title,
      id: Date.now(),
      order: formField.length + 1
    };

    newFormFieldArray.push(field);
    setFormField(newFormFieldArray);
    console.log(newFormFieldArray);
  };
  return (
    <>
      <div className="form-builder template-header">
        <input
          ref={templateName}
          className="template-title"
          type="text"
          placeholder="Enter Template Name"
        />
        <label className="switch">
          <input type="checkbox" onClick={changeMode} />
          <span className="slider round"></span>
        </label>

        <div>
          <span className="badge-secondary">Single Column</span>
          <span className="badge-secondary">Two Column</span>
          <span className="badge-secondary">Three Column</span>
        </div>
        <div className="template-buttons">
          <button className="btn btn-primary" onClick={saveHandler}>
            Save
          </button>
          <button className="btn btn-secondary" onClick={clearHandler}>
            Clear
          </button>
        </div>
      </div>
      <div className="form-builder">
        {!builderMode && <Preview formTemplateData={formField} />}
        {builderMode && (
          <div className="template">
            <div
              className="dropZone"
              onDragOver={onDragOverHandler}
              onDrop={onDropHandler}
            >
              {formField.length === 0 && (
                <h1 className="dropZone-title"> Add Form Elements</h1>
              )}
              {formField.map((field) => {
                return (
                  <div className="builder-mode">
                    <SettingModal
                      showModal={showModal}
                      onClose={closeModalHandler}
                      isInput={
                        field.name === FIELDS.INPUT ||
                        field.name === FIELDS.TEXTAREA ||
                        field.name === FIELDS.DATE_TIME
                      }
                    />
                    <div className="icons-container">
                      <FontAwesomeIcon
                        className="icons icon-primary"
                        icon={faCog}
                        onClick={showModalHandler}
                      />
                      <FontAwesomeIcon
                        onClick={() => removeField(field.id)}
                        className="icons icon-danger"
                        icon={faTimesCircle}
                      />
                    </div>
                    {field.name === "INPUT" && <Input {...field} />}
                    {field.name === "DATE_TIME" && <DateTime {...field} />}
                    {field.name === FIELDS.SELECT && <SelectField {...field} />}
                    {field.name === FIELDS.RADIO && <Radio {...field} />}
                    {field.name === FIELDS.CHECKBOX && <Checkbox {...field} />}
                    {field.name === FIELDS.TEXTAREA && <TextArea {...field} />}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FormBuilder;
