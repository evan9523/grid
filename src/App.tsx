import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Card from "./components/Card";
import data from "./data/mock_data.json";

function App() {
  const [term, setterm] = useState("");

  const [ispressed, setpressed] = useState(false);
  const [item, setitem] = useState("");

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
          background: "#ff9861",
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
          }}
          placeholder="Search Names"
          onChange={(e) => setterm(e.target.value)}
        />
      </div>
      <Stylediv>
        {newData.map((i) => (
          <Card
            key={i.id}
            name={i.name}
            bg={ispressed && item === i.name ? "#ed7c6b" : "#000"}
            onPress={() => {
              setpressed(!ispressed);
              setitem(i.name);
            }}
          />
        ))}
      </Stylediv>
    </div>
  );
}

const Stylediv = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5;
  flex-wrap: wrap;
  align-self: center;
`;

export default App;
