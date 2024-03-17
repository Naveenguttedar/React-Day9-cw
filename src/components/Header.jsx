import styled from 'styled-components';
function Header() {
  return (
    <Header_container>
      <Heading>Where Fitness Meets Fun and Results Are Achieved</Heading>
      <Paragraph>
        Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.
      </Paragraph>
    </Header_container>
  )
}
const Header_container = styled.div`
display:flex;
margin:2rem 0;
`;
const Heading = styled.h3`
width:33.33%;
font-size:1.7rem;
font-weight:300;
`;
const Paragraph = styled.p`
font-size:1.1rem;
color:grey;
padding:.5rem 0;
`;
export default Header;
