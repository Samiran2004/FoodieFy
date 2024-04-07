import styled from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import Foodcard from "./components/Foodcard";
import { useEffect, useState } from "react";

const API_URL = "https://foodiefy-backend.onrender.com";

const LoadingAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: red;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  margin-left: 10px;
  font-size: 24px;
  font-weight: bold;
  color: red;
`;

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData("/"); // Fetch all data initially
  }, []);

  const fetchData = async (type) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}${type}`);
      if (!response.ok) {
        throw new Error("Network is not working.");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterData = (type) => {
    fetchData(type);
  };

 function searchdata(e){
  console.log(e.target.value);
 }

  return (
    <MainContainer>
      <Nav filter={filterData} setData = {setData} data = {data}/>
      {loading ? (
        <LoadingAnimation>
          <Spinner />
          <LoadingText>Loading...</LoadingText>
        </LoadingAnimation>
      ) : (
        <Foodcard apiData={data} />
      )}
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: auto;
  background-image: url(https://png.pngtree.com/background/20231101/original/pngtree-3d-rendered-interface-for-a-homemade-food-app-picture-image_5830862.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
