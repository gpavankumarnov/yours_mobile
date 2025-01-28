import Grid from "@mui/material/Unstable_Grid2";
import { useFormContext } from "react-hook-form";
import TextFieldHandler from "../../../../common/components/form-wrapper/TextFieldHandler";
import { UserService } from "../../model/UserService";
import LoadOnAutocompleteIssueType from "./LoadOnAutocompleteIssueType";

const UserServiceForm = () => {
  const fieldIsRequired = "This field is required";

  const {
    control,
    formState: { errors },
  } = useFormContext<UserService>();

  return (
    //1 = 4px
    <Grid container columnSpacing={3} rowSpacing={3} direction="column" alignItems="center"  justifyContent="center">
      {/* <Box sx={Wrapper}> */}
      <Grid xs={12} md={12} xl={3}>
        <TextFieldHandler
          name="name"
          control={control}
          rules={{ required: fieldIsRequired }}
          // inputProps={{ maxLength: 20 }}
          label="name"
          variant="outlined"
          error={!!errors.name}
          fullWidth
          required
        />
      </Grid>
      <Grid xs={12} md={12} xl={3}>
        <TextFieldHandler
          name="phoneNum"
          control={control}
          variant="outlined"
          rules={{ required: fieldIsRequired }}
          inputProps={{ maxLength: 10 }}
          label="phone number"
          error={!!errors.phoneNum}
          required
        />
      </Grid>
      <Grid xs={12} md={12} xl={3}>
      <TextFieldHandler
          name="email"
          control={control}
          variant="outlined"
          rules={{ required: fieldIsRequired }}
          label="Email"
          error={!!errors.email}
        />
      </Grid>
      <Grid xs={12} md={12} xl={3}>
        <TextFieldHandler
          name="address"
          control={control}
          variant="outlined"
          rules={{ required: fieldIsRequired }}
          label="address"
          error={!!errors.address}
          multiline
          rows={5}
        />
        
      </Grid>
      <Grid xs={12} md={12} xl={3}>
      <LoadOnAutocompleteIssueType/>
      </Grid>
     

      {/* </Box> */}
    </Grid>
  );
};

export default UserServiceForm;
