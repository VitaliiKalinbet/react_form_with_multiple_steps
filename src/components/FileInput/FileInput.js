import React from "react";
import Dropzone from "react-dropzone";
import { CloudUpload, InsertDriveFile } from "@material-ui/icons";
import { Controller } from "react-hook-form";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
// import * as shortid from "shortid";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "10px",
    marginTop: "20px",
  },
  icon: {
    marginTop: "16px",
    color: "#888",
    fontSize: "42px",
  },
}));

const FileInput = ({ control, name }) => {
  const styles = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                className={styles.root}
                {...getRootProps()}
                variant="outlined"
              >
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file, ind) => (
              <ListItem key={ind}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={file.name} secondary={file.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};

export default FileInput;
