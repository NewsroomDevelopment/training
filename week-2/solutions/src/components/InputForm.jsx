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


const InputForm = () => {
    return (
        <Form>
            <span>Log your Sources:</span>
            <span>
                <label for="name">Source Name:</label>
                <input type="text" id="name" />
            </span>
            <span>
                <label for="email">Source Email:</label>
                <input type="email" id="email" />
            </span>
            <SubmitButton>Submit</SubmitButton>
        </Form>
    )
};

export default InputForm;