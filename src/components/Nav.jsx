import styled from "styled-components";
import FilterBtn from "./Filterbtn";

function Nav({ filter }) {
    const handleFilter = (type) => {
        filter(type);
    };

    return (
        <MainContainer>
            <NavMainContainer>
                <div className="logo">
                    <h1>
                        <span>F</span>oodie<span>F</span>y
                    </h1>
                </div>
                <div className="search">
                    <input placeholder="Search Food..." />
                </div>
            </NavMainContainer>
            <div className="filterBtn">
                <FilterBtn name={"All"} handleClick={() => handleFilter("/")} />
                <FilterBtn
                    name={"Breakfast"}
                    handleClick={() => handleFilter("/breakfast")}
                />
                <FilterBtn
                    name={"Lunch"}
                    handleClick={() => handleFilter("/lunch")}
                />
                <FilterBtn
                    name={"Dinner"}
                    handleClick={() => handleFilter("/dinner")}
                />
            </div>
        </MainContainer>
    );
}

export default Nav;
const MainContainer = styled.div`
    height: 15vh;
    .filterBtn {
        /* border: 2px solid white; */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
    }

    @media (max-width: 768px) {
        .filterBtn {
            margin-top: 20px;
            flex-direction: column;
            gap: 50px;
        }
    }

    @media (max-width: 480px) {
        .filterBtn {
            gap: 20px;
        }
    }
`
const NavMainContainer = styled.div`
    background-color: #323334;
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;

    .logo {
        font-size: 20px;
        font-weight: 900;
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 10px;
        
        span {
            color: #ff7300;
        }
    }

    .search input {
        background-color: white;
        width: 200px;
        height: 40px;
        border: none;
        border-radius: 10px;
        color: black;
        font-size: 15px;
        padding-left: 10px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .logo {
            margin-bottom: 20px;
            padding-left: 0;
        }

        .search {
            margin-top: 20px;
        }
        .search input{
            width: 60vw;
        }
    }
`