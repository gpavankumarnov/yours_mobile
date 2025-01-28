import { Box, styled } from "@mui/material";
import Service from "./Service";


const Image = styled('img')({
  width: '20%',
  height: '10%',
  border:'2px solid',
  objectFit:'contain'
});



export interface OneStepServicePageProps{
  btnTitle:string
  handleOnClick:()=>void
  variant?: "text" | "outlined" | "contained"; 
}

const ServiceSection = (props:OneStepServicePageProps) => {
  return (
    <Box>
      {/* <Image src={serviceImage} alt="serviceImage"/> */}
      <Service
      {...props}
      />
      
    </Box>
  )
}

export default ServiceSection
