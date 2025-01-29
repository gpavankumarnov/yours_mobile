import { Box } from "@mui/material";
import Service from "./Service";
import { OneStepServicePageProps } from "./ServiceSection";

// const Image = styled('img')({
//   width: '20%',
//   height: '10%',
//   border:'2px solid',
//   objectFit:'contain'
// });


const AccessoriesSection = (props:OneStepServicePageProps) => {
  return (
    <Box sx={{flexDirection:'column', display:'flex', alignItems:'center', gap:'2rem'}}>
      {/* <Image src={AccessoriesImage} alt="accessoriesImage"/> */}
      <Service
      {...props}
      />
      
    </Box>
  )
}

export default AccessoriesSection
