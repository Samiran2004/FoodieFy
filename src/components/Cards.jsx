import styled from "styled-components";
function Card({ name , price,image}) {

    return (
        <Cardcontainer>
            <img src={image} alt="Reload" />
            <h2>{name}</h2>
            <p>{price}</p>
        </Cardcontainer>
    )
};
export default Card;

const Cardcontainer = styled.div`
    height: 250px;
    width: 400px;
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 20px;
    gap: 20px;
    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    h2{
        color: white;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 35px;
    }
    p{
        color: white;
        font-size: 20px;
    }
`