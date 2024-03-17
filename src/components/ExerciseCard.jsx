import styled from 'styled-components';
function ExerciseCard({ gifUrl, name, target, bodyPart }) {
    return (
        <Container >
            <Gif src={gifUrl} />
            <h4>{name}</h4>
            <p>{target}</p>
            <p>{bodyPart}</p>
        </Container>
    )

}
const Container = styled.div`
display:flex;
// max-width:300px;
flex-direction:column;
padding:.5rem;
box-shadow :rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
&:hover{box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;};
border-radius:5px;
`
const Gif = styled.img`
object-fit:cover;
width:100%;
height:100%;
mix-blend-mode:multiply;
`
export default ExerciseCard;
