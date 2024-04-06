import styled from "styled-components";
import Card from "./Cards";
function Foodcard(){
    return(
        <MainContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </MainContainer>
    )
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