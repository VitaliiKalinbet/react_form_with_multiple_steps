import React from "react";
import { Typography } from "@material-ui/core";
import FileInput from "../FileInput/FileInput";
import Form from "../Form/Form";
import MainContainer from "../MainContainer/MainContainer";
import { useForm } from "react-hook-form";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useHistory } from "react-router-dom";
import { useData } from "../../context/DataContext";

const Step3 = () => {
  const { data, setValues } = useData();

  const history = useHistory();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push("/result");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography>Step 3</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step3;
