import React, {useState} from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 20px;
`

const Input = styled.input`
border-radius: 4px;
margin-right: 10px;
color: red

`

export const Button = styled.button`
border-radius: 4px;
color: white;
background-color:red;

`



export default function Search(props) {
    const [filter, setFilter] = useState('')
    const handleChange = e => {
        setFilter(e.target.value);
      };
      
    return (
        <Container>
            <Input onChange={handleChange} />
            <Button onClick={() => {props.onClick(filter)}}>Search</Button>
            
        </Container>
    )
}
