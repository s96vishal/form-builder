import { useState } from "react";
import Input from "./Fields/Input";
import TextArea from "./Fields/TextArea";
import { FIELDS } from "./constants";
import Radio from "./Fields/RadioButtons";
import Checkbox from "./Fields/Checkbox";
import SelectField from "./Fields/SelectField";
import DateTime from "./Fields/DateTime";

const formTemplateData = {
  name: "Vishal Form",
  uuid: "UNIQUE_UUID",
  fields: [
    {
      title: "Input",
      name: "INPUT",
      type: "text",
      label: "first Name",
      minLength: 3,
      maxLength: 10,
      placeholder: "Enter your First Name",
      value: ""
    },
    {
      title: "Input",
      name: "INPUT",
      type: "text",
      label: "Last Name",
      minLength: 3,
      maxLength: 10,
      placeholder: "Enter your Last Name",
      value: ""
    },
    {
      title: "Input",
      name: "INPUT",
      type: "email",
      label: "Email",
      minLength: 3,
      maxLength: 10,
      placeholder: "abc@xyz.com",
      value: ""
    },
    {
      title: "Text Area",
      name: "TEXT_AREA",

      label: "Text Area",
      minLength: 3,
      maxLength: 10,
      placeholder: "Enter your message",
      value: ""
    }
  ]
};
const Preview = (props) => {
  const [formTemplate, setFormTemplate] = useState({});

  // To call rest API and get the data

  return (
    <>
      {props.formTemplateData.length === 0 && (
        <h1 className="dropZone-title"> No Form Element Present.</h1>
      )}
      <div className="form-preview">
        {props.formTemplateData.map((field) => {
          if (field.name === "INPUT") {
            return <Input {...field} />;
          }
          if (field.name === "TEXT_AREA") {
            return <TextArea {...field} />;
          }
          if (field.name === FIELDS.RADIO) {
            return <Radio {...field} />;
          }
          if (field.name === FIELDS.CHECKBOX) {
            return <Checkbox {...field} />;
          }
          if (field.name === FIELDS.SELECT) {
            return <SelectField {...field} />;
          }
          if (field.name === FIELDS.DATE_TIME) {
            return <DateTime {...field} />;
          }
        })}
      </div>
    </>
  );
};

export default Preview;
