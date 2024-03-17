import styled from 'styled-components';
function Gallery() {

  return (
    <Container>
      <Section>
        <Sec_top>
          <Img src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"/>
          <Img src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </Sec_top>
        <Sec_bot>
          <Img src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg" alt=""/>
        </Sec_bot>
      </Section>
      <Section>
        <Sec_bot>
          <Img src="https://wallpaperaccess.com/full/1087621.jpg"/>
        </Sec_bot>
        <Sec_top>
          <Img src="https://wallpapercave.com/wp/wp6331008.jpg"/>
          <Img src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"/>
        </Sec_top>
      </Section>
    </Container>
  )
}
const Container = styled.div`
display:flex;
gap:.5rem;
`
const Img = styled.img`
object-fit:cover;
width:100%;
height:100%;
`
const Section=styled.div`
display:flex;
width:50%;
flex-direction:column;
gap:.5rem;
`
const Sec_top=styled.div`
display:flex;
width:50%;
gap:.2rem;
`
const Sec_bot=styled.div`
width:100%;
`
export default Gallery;
