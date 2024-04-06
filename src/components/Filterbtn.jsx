import styled from "styled-components";
function FilterBtn({ name }) {
    return (
        <div>
            <Filterbtncont>
                <p>{name}</p>
            </Filterbtncont>
        </div>
    )
};
export default FilterBtn;

const Filterbtncont = styled.button`
    background-color: red;
    width: 100px;
    height: 40px;
    font-size: 17px;
    font-weight: 700;
    color: white;
    border-radius: 20px;
    border: none;
    padding: 5px;
    margin: 10px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 80px;
        height: 30px;
        font-size: 14px;
        border-radius: 15px;
    }

    @media (max-width: 480px) {
        width: 60px;
        height: 25px;
        font-size: 12px;
        border-radius: 10px;
    }
`