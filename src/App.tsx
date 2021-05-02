import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Card from "./components/Card";
import data from "./data/mock_data.json";

const App = () => {
  const [term, setterm] = useState("");

  const [ispressed, setpressed] = useState(false);
  const [item, setitem] = useState("");
  const [filteredData, setfilteredData] = useState([]);
  // useEffect(() => {
  //   setfilteredData(() =>
  //     data.filter((i) => {
  //       return i.name.toLowerCase().includes(term.toLowerCase());
  //     })
  //   );
  // }, [term, data]);

  const newData = data.filter((i) => {
    return i.name.toLowerCase().includes(term.toLowerCase());
  });

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: 100,
          background: "#3d3d3d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            height: 30,
            width: 250,
            borderWidth: 1,
            borderRadius: 15,
            padding: 10,
            fontSize: 20,
            borderColor: "gray",
          }}
          placeholder="Search Names"
          onChange={(e) => setterm(e.target.value)}
        />
      </div>
      <Stylediv>
        {newData.map((i, index) => (
          <Card
            key={index}
            name={i.name}
            bg={ispressed && item === i.name ? "#ff5252" : "#000"}
            onPress={() => {
              setpressed(!ispressed);
              setitem(i.name);
            }}
          />
        ))}
      </Stylediv>
    </div>
  );
};

const Stylediv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d6d6d6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5;
  flex-wrap: wrap;
  align-self: center;
`;

export default App;
