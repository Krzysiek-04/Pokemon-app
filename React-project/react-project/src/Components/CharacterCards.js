import React from "react";
import styled from "styled-components";



const Card = styled.div`
  beckground: #c8b590;
  cursor: pointer;
  border-redius: 8px;
  box-sizing: border-box;
  padding-bottom: 5px;
  margin: 10px 15px 10px 15px;
  width: 140px;
  hight: auto;
  box-shadow: 4px 4px 10px;
  text-algin: center;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: blod;
  text-algin: center;
`;

const Image = styled.img`
  border-redius: 6px;
  width: 100px;
  hight: 100px;
  text-algin: center;
`;

const Paragraph = styled.p`
  font-size: 10px;
  margin: 3px;
`;

const CharacterCard = ({ name, imge, species, index, status }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/${name}/${id}`);
  };

  return (
    <List>
      <Card data-name={name} onClick={handleClick}>
        <Image src={image} alt={name} />
        <div>
          <Title> {name} </Title>
          <Paragraph index={index}>
            {" "}
            {species}, {status}{" "}
          </Paragraph>
        </div>
      </Card>
    </List>
  );
};

export default CharacterCards;
