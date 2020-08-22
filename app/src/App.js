import React from "react";

// requests
import requests from "./services/requests";

// Components
import Row from "./components/Row";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <h1>Netflix Clone</h1>
      <Row title="trending now" fetchData={requests.fetchTrending}/>
      <Row title="netflix originals" fetchData={requests.fetchNetflixOriginals}/>
    </>
  );
}

export default App;
