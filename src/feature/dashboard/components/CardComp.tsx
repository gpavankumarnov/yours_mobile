import { Button, Card, CardActions, CardMedia } from '@mui/material';
import serviceImage from '../../../../assets/serviceImage.jpg';

export type CardCompProps = {
  image:string
  title:string
  btnsList:string[]
}


const CardComp = () => {
  return (
    <Card >
      <CardMedia
        // sx={{ height: 140 }}
        image={serviceImage}
        title="green iguana"
      />
       <CardActions>
        
       <Button size="small">Share</Button>
       </CardActions>
    </Card>
  )
}

export default CardComp
