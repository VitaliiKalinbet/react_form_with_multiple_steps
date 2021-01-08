import {
  Table,
  TableHead,
  Typography,
  TableRow,
  TableBody,
  TableCell,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  TableContainer,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import MainContainer from "../MainContainer/MainContainer";
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { InsertDriveFile } from "@material-ui/icons";
import Swal from "sweetalert2";
import Confetti from "react-confetti";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
  table: {
    marginBottom: "30px",
  },
  button: {
    marginBottom: "30px",
  },
});

const Result = () => {
  const styles = useStyles();

  const [success, setSuccess] = useState(false);

  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const { files } = data;

  // use with server - onSubmit:
  const onSubmit = async () => {
    const formData = new FormData();

    if (data.files) {
      data.files.forEach((file) => {
        formData.append("files", file, file.name);
      });
    }

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    const res = await fetch("http://localhost:4000/", {
      method: "POST",
      body: formData,
    });

    if (res.status === 200) {
      Swal.fire("Great job!", "You did this");
      setSuccess(true);
    }
  };

  // use without server - onSubmit:
  const onSubmit2 = () => {
    Swal.fire("Great job!", "You did this");
    setSuccess(true);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h4">
        Form Values
      </Typography>
      <TableContainer className={styles.root}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {entries.map((entry, ind) => (
              <TableRow key={ind}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell>{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {files && (
        <>
          <Typography component="h2" variant="h5">
            Files
          </Typography>
          <List>
            {files.map((file, ind) => (
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

      <Button
        className={styles.button}
        fullWidth
        variant="contained"
        color="primary"
        type="button"
        onClick={onSubmit2}
      >
        Submit
      </Button>
      <Link to="/">Start over</Link>

      {success && <Confetti />}
    </MainContainer>
  );
};

export default Result;
