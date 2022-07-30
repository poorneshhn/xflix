import {
  Box,
  Modal,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { BorderlessButton } from "../borderlessbutton/BorderlessButton";
import CustomRedButton from "../customredbutton/CustomRedButton";
import "./custommodal.css";
import {
  DROPDOWN,
  TEXTFIELD,
  TEXTFIELD_DETAILS,
} from "../../../constants/modalConstants";
import { Close } from "@material-ui/icons";
import CustomSelect from "../customselect/CustomSelect";
import { useState } from "react";
import { VIDEO_POST } from "../../../constants/URLs";
import { axiosInstance } from "../../../axiosbase/axiosBase";
import { formatDate } from "../../../utils/utils";

const useStyles = makeStyles({
  input: {
    color: "rgba(255, 255, 255, 0.87)",
  },
  helperText: {
    color: "rgba(255, 255, 255, 0.6)",
  },
  label: {
    color: "rgba(255, 255, 255, 0.38)",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#383838",
  boxShadow: 24,
  minHeight: 650,
  p: 2,
};

const CustomModal = (props) => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    videoLink: "",
    title: "",
    genre: "",
    contentRating: "",
    releaseDate: "",
    previewImage: "",
  });

  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleClick = async () => {
    let dateFormatedValue = formatDate(formValues["releaseDate"]);
    formValues.releaseDate = dateFormatedValue;
    const res = await axiosInstance.post(VIDEO_POST, formValues);
    if (res.status === 201) {
      alert("Successfully posted the video info");
    }
    props.handleClose();
  };
  return (
    <div>
      <Modal
        className="custom-modal-container"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box-modal" sx={style}>
          <Box className="modal-header-container">
            <Typography
              className="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Upload Video
            </Typography>
            <Typography
              onClick={props.handleClose}
              className="modal-modal-close"
              variant="h6"
              component="h3"
            >
              <Close />
            </Typography>
          </Box>
          {TEXTFIELD_DETAILS.map((item) => {
            if (item.type === TEXTFIELD) {
              return (
                <TextField
                  key={item.id}
                  onChange={(e) => handleChange(item.name, e.target.value)}
                  value={formValues[item.name]}
                  className="outlined-basic"
                  label={item.label}
                  variant="outlined"
                  helperText={item.helperText}
                  inputProps={{ className: classes.input }}
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.label,
                    },
                  }}
                  type={item.subType === "date" && "date"}
                />
              );
            } else if (item.type === DROPDOWN) {
              return (
                <CustomSelect
                  key={item.id}
                  values={item.values}
                  label={item.label}
                  helperText={item.helperText}
                  onChange={(e) => handleChange(item.name, e.target.value)}
                />
              );
            }
          })}
          <Box className="buttons-container">
            <CustomRedButton title="UPLOAD VIDEO" onClick={handleClick} />
            <BorderlessButton onClick={props.handleClose} title="CANCEL" />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
