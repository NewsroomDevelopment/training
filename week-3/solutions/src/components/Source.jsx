import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
    margin: 1rem 0;

    span {
        width: 25%;
    }
`;

const DeleteButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: pink;
    font-weight: bold;
`;

const Source = ({ number, name, email, deleteSource }) => {
    return (
        <>
            <Row>
                <span>Source:</span>
                <span>{name}</span>
                <span>{email}</span>
                <DeleteButton onClick={() => deleteSource(number)}>Delete</DeleteButton>
            </Row>
            <hr></hr>
        </>
    )
};

export default Source;