import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExerciseCard from './ExerciseCard';
function ExerciseList() {
    const [exercises, setExercises] = useState([]);
    const [exListLimit, setExListLimit] = useState(10);

    const fetchData = async (limit) => {
        const API_KEY = import.meta.env.VITE_MY_API_KEY;
        const url = `https://exercisedb.p.rapidapi.com/exercises?limit=${limit}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }
        try {
            const res = await fetch(url, options);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await res.json();
            setExercises(result); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const getFetchData = (limit = 10) => {
        fetchData(limit);
    };

    useEffect(() => {
        getFetchData(exListLimit);
    }, [exListLimit]);

    const [searchInput, setSearchInput] = useState('');
    const filterExercises = (input) => {
        const filtered = exercises.filter((exercise) => {
            const { target, bodyPart, name } = exercise;
            const lowerCaseInput = input.toLowerCase();
            return (
                target.toLowerCase().includes(lowerCaseInput) ||
                bodyPart.toLowerCase().includes(lowerCaseInput) ||
                name.toLowerCase().includes(lowerCaseInput)
            );
        });
        setExercises(filtered);
    };
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
        filterExercises(event.target.value);
    };

    return (
        <Container>
            <h2 style={{ fontWeight: 300 }}>Exercise List</h2>
            <Input type="text" placeholder="Search by target, body part, or exercise " value={searchInput} onChange={handleSearchInputChange} />
            <List>
                {
                    exercises.map((exercise) => (
                        <ExerciseCard key={exercise.id} gifUrl={exercise.gifUrl} name={exercise.name} target={exercise.target} bodyPart={exercise.bodyPart} />
                    ))
                }
            </List>
            <Button onClick={() => setExListLimit(exListLimit + 10)}>Learn more...</Button>
        </Container>
    )
}
const Container = styled.div`
margin:2rem 0;
`
const List = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
justify-content:space-between;
align-items:space_between;
gap:.5rem;
`
const Input = styled.input`
width:100%;
font-size:1rem;
margin:1rem 0;
padding:.5rem;
border-radius:5px;
border:1px solid grey;
outline:none;
`
const Button = styled.button`
cursor:pointer;
border-radius:5px;
padding:.3rem;
outline:none;
border:2px solid;
margin:1rem 0;
color:white;
font-size:1rem;
background-color:grey;
`
export default ExerciseList;
