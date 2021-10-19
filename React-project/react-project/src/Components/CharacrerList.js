import React from "react";
import CharacterCards from "./CharacterCards";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 30%;
`;

function CharacterList({ postaci }) {
  return (
    <div>
      <Wrapper className="characterContainer">
        {postaci?.results.map(
          ({ name, spacies, image, status, gender, id }) => (
            <CharacterCards
              key={id}
              name={name}
              species={species}
              image={image}
              status={status}
              geder={gender}
              id={id}
            />
          )
        )}
      </Wrapper>
    </div>
  );
}

export default CharacterList;
