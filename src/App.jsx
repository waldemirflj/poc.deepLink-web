import React, { useState, useEffect } from "react";
import { Container, Row, Navbar } from "react-bootstrap";

// components
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  function mapping(json) {
    const maxTitle = 25;
    const maxDescription = 50;

    const arr = json.map((value) => ({
      id: value.id,
      title:
        value.title.length > maxTitle
          ? value.title.substring(0, maxTitle) + "..."
          : value.title,
      description:
        value.description.length > maxDescription
          ? value.description.substring(0, maxDescription) + "..."
          : value.description + ".",
    }));

    setData(arr);
  }

  useEffect(() => {
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://fakestoreapi.com/products", options)
      .then((res) => res.json())
      .then((json) => mapping(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>RN - Deep Linking</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row className="g-3 py-3">
          {data.map((v, i) => (
            <Card
              id={v.id}
              key={i.toString()}
              title={v.title}
              description={v.description}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
