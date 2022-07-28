import "./customselect.css";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import React, { useState } from "react";

const CustomSelect = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    props.onChange(e);
  };
  return (
    <FormControl fullWidth style={{ marginTop: "10px" }}>
      <InputLabel
        style={{ paddingLeft: "0.8rem", color: "rgba(255, 255, 255, 0.38)" }}
      >
        {props.label}
      </InputLabel>
      <Select
        variant="outlined"
        style={{ color: "rgba(255, 255, 255, 0.87)" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedValue}
        label=""
        onChange={handleChange}
      >
        {props.values.map((item) => {
          return (
            <MenuItem key={item.id} value={item.label}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText style={{ color: "rgba(255, 255, 255, 0.6)" }}>
        {props.helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomSelect;
