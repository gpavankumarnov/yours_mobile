import { Box } from "@mui/material"
import audioStore from '../../../../../assets/Banner/audioStore.png'
import homeAppliance from '../../../../../assets/Banner/homeAppliance.png'
import laptops from '../../../../../assets/Banner/laptops.png'
import personalCare from '../../../../../assets/Banner/personalCare.png'
import smartPhones from '../../../../../assets/Banner/smartPhones.png'
import smartTVs from '../../../../../assets/Banner/smartTVs.png'
import smartWatches from '../../../../../assets/Banner/smartWatches.png'
import tablets from '../../../../../assets/Banner/tablets.png'
import { bannerStyles, Wrapper } from "./AccessoriesComp.style"


const list = [{
  "title": "Smartphones",
  "type": "category",
   "image": smartPhones
},
{
  "title": "Smart Watches",
  "type": "category",
   "image": smartWatches
},
{
  "title": "Android Tvs",
  "type": "category",
   "image": laptops
},
{
  "title": "Smartphones",
  "type": "category",
   "image": smartTVs
},
{
  "title": "Audio Store",
  "type": "category",
   "image": audioStore
},
{
  "title": "Tablets",
  "type": "category",
   "image": tablets
},
{
  "title": "Personal Care",
  "type": "category",
   "image": personalCare
},
{
  "title": "Home Appliance",
  "type": "category",
   "image": homeAppliance
},



]


const AccessoriesComp = () => {
  return (
    <>
    <Box sx={Wrapper}>
      <Box sx={bannerStyles}>
      {list.map(({title, image}, index)=> {
        return (
          <li key={index}>
            <img src={image} alt={title}/>
          </li>
        )
      })}
      </Box>
    </Box>
      {/* <SlickSlider/> */}
      </>
  )
}

export default AccessoriesComp
