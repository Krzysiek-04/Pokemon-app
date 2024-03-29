import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterList from "../components/CharacterList";
import foto from "../Image/foto";
import FilterSwitch from "../components/FilterSwitch";

const PageButton = styled.button`
  line-height: 40px;
  margin: 100px 100px 20px 80px;
  display: inline-block;
  height: 60px;
  width: 150px;
  border: none;
  background-color: #3e4451;
  box-shadow: 0 4px 8px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  padding: 0;
  color: Gray88;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 4px 8px 10px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    background-color: Gray88;
    color: #3e4451;
    border-radius: 1px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${foto});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const CardContainer = styled.div`
  display: flex;
  border: 2px solid black;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  > * {
    width: 100%;
    background-color: #ffa500;
  }
`;

const NEXT = "NASTĘPNA";
const PREV = "POPRZEDNIA";
const TITLE = "LISTA POSTACI";

function Characters() {
  const [page, setCurrentPage] = useState(1);
  const [postaci, setPostaci] = useState(null);

  const next = () => {
    if (page === 34) {
      setCurrentPage(page);
    }
    setCurrentPage(page + 1);
  };
  const previous = () => {
    if (page === 1) {
      setCurrentPage(page);
    }
    setCurrentPage(page - 1);
  };
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        setPostaci(response.data);
      })
      .then((result) => {
        setPostaci(result);
      });
  }, [page]);
  if (!postaci) {
    <h1>Loading...</h1>;
  }

  return (
    <div>
      <MainContainer>
        <h4>
          <PageButton onClick={previous}>{PREV}</PageButton>
          {TITLE} ({postaci?.info.count}){" "}
          <PageButton onClick={next}>{NEXT}</PageButton>
        </h4>
        <input type="text" placeholder="Szukaj..."></input>
        <FilterSwitch />
        <CardContainer>
          <CharacterList postaci={postaci} />
        </CardContainer>
      </MainContainer>
    </div>
  );
}
export default Characters;
