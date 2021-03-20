import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem;
    background-color: #60B3FB;
    color: white;
`;

const SubmitButton = styled.button`
    padding: 0.5rem 1rem;
    background: #A3FFA6;
    font-weight: bold;
`;


const InputForm = ({ addSource }) => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [data, setData] = useState({
        name: '',
        email: ''
    });

    const submitSource = (e) => {
        e.preventDefault();
        addSource(data);
    };

    return (
        <Form>
            <span>Log your Sources:</span>
            <span>
                <label for="name">Source Name:</label>
                <input type="text" id="name" value={data.name} onChange={e => setData({name: e.target.value, email: data.email})} />
            </span>
            <span>
                <label for="email">Source Email:</label>
                <input type="email" id="email" value={data.email} onChange={e => setData({name: data.name, email: e.target.value})} />
            </span>
            <SubmitButton onClick={submitSource}>Submit</SubmitButton>
        </Form>
    )
};

export default InputForm;
