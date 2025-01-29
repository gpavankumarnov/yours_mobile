import styled, { css, keyframes } from "styled-components";
import img4 from '../../../assets/img4.jpg';
import img5 from '../../../assets/img5.jpg';
import img9 from '../../../assets/img9.jpg';



interface InfiniteCarouselProps {
  list1: string[];
  list2: string[];
}

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 20s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;


const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const InfiniteCarousel = ({ list1 }: InfiniteCarouselProps) => {

  const list3 = [img4, img5, img9]
  return (
    <>
    <Marquee>
      <MarqueeGroup>
        {list1.map((el,index) => (
          <ImageGroup key={index}>
            <Image src={el} />
          </ImageGroup>
        ))}
      </MarqueeGroup>
      <MarqueeGroup>
        {list1.map((el)=>(
            <ImageGroup>
                <Image src={el}/>
            </ImageGroup>
        ))}
       </MarqueeGroup>
       </Marquee>
       {/* <Marquee>
    
      <MarqueeGroup>
        {list2.map((el,index) => (
          <ImageGroup key={index}>
            <Image src={el} />
          </ImageGroup>
        ))}
      </MarqueeGroup>
      <MarqueeGroup>
        {list2.map((el)=>(
            <ImageGroup>
                <Image src={el}/>
            </ImageGroup>
        ))}
       </MarqueeGroup>
       </Marquee> */}
       <Marquee>
      <MarqueeGroup2>
        {list3.map((el)=>(
            <ImageGroup>
                <Image src={el}/>
            </ImageGroup>
        ))}
       </MarqueeGroup2>
      <MarqueeGroup2>
        {list3.map((el)=>(
            <ImageGroup>
                <Image src={el}/>
            </ImageGroup>
        ))}
       </MarqueeGroup2>
    </Marquee>
    </>
  );
};

export default InfiniteCarousel;
