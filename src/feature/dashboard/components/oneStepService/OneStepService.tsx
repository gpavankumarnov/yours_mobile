import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../core/stateManagement/hooks";
import { fetchAllDashboardData } from "../../store/dashboardSlice";
import AccessoriesSection from "./AccessoriesSection";
import { Wrapper } from "./OneStepService.style";
import ServiceSection from "./ServiceSection";

const OneStepService = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    dispatch(fetchAllDashboardData());
  }, []);

  return (
    <Box sx={Wrapper}>

        <ServiceSection
          variant="contained"
          btnTitle="One Step Service"
          handleOnClick={() =>  navigate("/service")}
        />
      
        <AccessoriesSection
          variant="contained"
          btnTitle="Accessories"
          handleOnClick={() => navigate("/accessories")}
        />
    

    </Box>
  );
};

export default OneStepService;
