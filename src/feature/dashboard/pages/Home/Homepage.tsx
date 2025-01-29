import styled from "styled-components";
import DataGridComp from "../../components/DataGridComp/DataGridComp";
import InfiniteCarousel from "../../components/InfiniteCarousel";
import OneStepService from "../../components/oneStepService/OneStepService";
import { row1, row2 } from "../../model/infiniteCarouselData";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

`

const Wrapper = styled.div`
  width: 100%;
  height:100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  ;
`


// const Note = styled.div`
//   font-size: 18px;
//   font-weight: 200;
//   margin-bottom: 40px;
//   color: #7c8e9a;
// `;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;


  /** 
this file contains 
1. main page load after appl starts.
2. renders 3 components - 
                  1. title display 
                  2. service & accessories component 
                  3. carousel wrapper
*/

const Homepage = () => {

  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const carouselData = {list1:row1, list2:row2}
  
  return (
    <AppContainer>
      <Wrapper>
      <Text>Mobile World!</Text>
      <OneStepService    
      />
      
      <InfiniteCarousel {...carouselData} />
      <DataGridComp/>
      </Wrapper>
    </AppContainer>


  )
}

export default Homepage
