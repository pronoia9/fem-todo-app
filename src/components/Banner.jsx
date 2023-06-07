import styled from 'styled-components';

export default function Banner() {
  return (
    <Container className='bg-img-container'>
      <Image className='bg-img' alt='banner' />
    </Container>
  );
}


const Container = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: opacity 1s;
  background-image: url(${(props) => `/images/bg-desktop-${props.theme.image}`});
`;