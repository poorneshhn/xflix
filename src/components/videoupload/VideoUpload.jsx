import "./videoupload.css";
import { Publish } from "@material-ui/icons";
import CustomModal from "../basic/modal/CustomModal";
import { useState } from "react";
const VideoUpload = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="fileupload-container">
      <button onClick={() => setOpen(true)} className="file-button">
        <Publish />
        <span>Upload</span>
      </button>
      <CustomModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default VideoUpload;
