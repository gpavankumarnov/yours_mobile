import { Button } from "@mui/material";
import { OneStepServicePageProps } from "./ServiceSection";

const Service = ({
  btnTitle,
  handleOnClick,
  variant
}: OneStepServicePageProps) => {

  return <Button color="primary" onClick={handleOnClick} variant={variant}>{btnTitle}</Button>;
};

export default Service;
