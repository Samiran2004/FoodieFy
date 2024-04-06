// App.js
import styled from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import Foodcard from "./components/Foodcard";
import { useEffect, useState } from "react";

const API_URL = "https://foodiefy-backend.onrender.com";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("/"); // Fetch all data initially
  }, []);

  const fetchData = async (type) => {
    try {
      const response = await fetch(`${API_URL}${type}`);
      if (!response.ok) {
        throw new Error("Network is not working.");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterData = (type) => {
    fetchData(type);
  };

  return (
    <MainContainer>
      <Nav filter={filterData} />
      <Foodcard apiData={data} />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: auto;
  background-image:url(https://png.pngtree.com/background/20231101/original/pngtree-3d-rendered-interface-for-a-homemade-food-app-picture-image_5830862.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`