import React from "react";
import "../../App.css";
import "../../Style/MainSearch.css";
import { Jumbotron, InputGroup, FormControl } from "react-bootstrap";

function MainSearch(props) {
  return (
    <Jumbotron fluid className="text-center">
      <h1>HistorianDB</h1>
      <InputGroup className="MainSearch">
        <FormControl size="lg" placeholder="Winston Churchill, 1941" />
      </InputGroup>
    </Jumbotron>
  );
}

export default MainSearch;
