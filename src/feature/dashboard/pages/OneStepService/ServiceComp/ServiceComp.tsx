import { Box, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import UserServiceForm from "../../../components/UserServiceRequestForm/UserServiceForm";
import { UserService, defaultUserService } from "../../../model/UserService";
import { Wrapper } from "./ServiceComp.style";

const ServiceComp = () => {

  const form = useForm<UserService>({
    defaultValues: defaultUserService,
    mode: "onChange",
  });

  const {
    handleSubmit,
  } = form;


  const onFormSubmit = (data: UserService) => {
    console.log("data", data);
  };

  return (
    <Box sx={Wrapper}>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <UserServiceForm />
        </form>
      </FormProvider>
      <Button variant="contained" onClick={handleSubmit(onFormSubmit)}>Submit</Button>
    </Box>
  );
};

export default ServiceComp;
