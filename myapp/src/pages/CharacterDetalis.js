import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button, Container, Typography } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import useFetch from "../customHooks/useFetch";
import charDetails from "../img/charDetails.jpg";

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(${charDetails});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
`;

const CharacterImage = styled.img`
  border-radius: 35%;
  border: 10px solid gold;
`;

const DataContainer = styled(Container)`
  max-width: 40%;
  position: absolute;
  top: 20%;
  left: 5%;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
`;
const CustomButton = styled(Button)`
  margin-bottom: 5rem;
`;

const CharacterDetails = () => {
  const page = useSelector((state) => state.characterList.page);

  const { id, name } = useParams();
  const { data, error, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return (
    <MainContainer>
      <Container>
        {isLoading && <p>Loading...</p>}
        {error && <h1>{error}</h1>}
      </Container>
      {data && (
        <>
          <DataContainer>
            <CustomLink to="/character-list">
              <CustomButton
                startIcon={<NavigateBeforeIcon />}
                color={"primary"}
                variant={"contained"}
              >
                {`Powrót do listy postaci (strona nr ${page}) `}
              </CustomButton>
            </CustomLink>
            <Typography variant="h4" gutterBottom>
              DANE POSTACI:
            </Typography>
            <Typography variant="h5">NUMER ID - {id}</Typography>
            <Typography variant="h5">IMIĘ - {name}</Typography>
            <Typography variant="h5">STATUS - {data.status}</Typography>
            <Typography variant="h5" gutterBottom>
              GATUNEK - {data.species}
            </Typography>
          </DataContainer>
          <ImageContainer>
            <CharacterImage src={data.image} alt={data.name} />
          </ImageContainer>
        </>
      )}
    </MainContainer>
  );
};

export default CharacterDetails;
