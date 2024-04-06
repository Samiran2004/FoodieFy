import styled from "styled-components";
import Card from "./Cards";
function Foodcard({ apiData }) {
    if (!apiData || !apiData.data || apiData.data.length === 0) {
        return (
            <MainContainer>
                <p>No data available</p>
            </MainContainer>
        );
    }

    return (
        <MainContainer>
            {apiData.data.map((item, index) => (
                <Card key={index} name={item.name} price={item.price} image={item.image}/>
            ))}
        </MainContainer>
    );
};

export default Foodcard;

const MainContainer = styled.div`
    /* border: 2px solid white; */
    height: 100vh;
    margin-top: 10vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px;
    align-items: center;
    @media (max-width: 768px) {
    
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; 
    } 
`