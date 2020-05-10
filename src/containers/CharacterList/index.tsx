import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Loading, Card } from "../../components";
import { Container } from "./styles";
import { ICharacter } from "../../interfaces";

export const CharacterList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [previousPageUrl, setPreviousPageUrl] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const apiRequest = axios.CancelToken.source();
    axios.get(currentPageUrl).then((res) => {
      console.log(res.data);
      setIsLoading(false);
      setCharacters(res.data.results);
      setNextPageUrl(res.data.info.next);
      setPreviousPageUrl(res.data.info.prev);
    });
    return () => apiRequest.cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  return (
    <Container>
      {isLoading && <Loading />}
      {!isLoading &&
        characters &&
        characters.map((character: ICharacter) => (
          <Card key={character.id} name={character.name}>
            <Card.Header>
              <Card.Image src={character.image} alt={character.name} />
              <Card.Title>
                <h2>{character.name}</h2>
                <p>
                  id: {character.id} - {character.created}
                </p>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.CharacteristicsWrapper>
                <Card.Characteristic>
                  <Card.CharacteristicTitle title="status" />
                  <Card.CharacteristicValue value={character.status} />
                </Card.Characteristic>
                <Card.Characteristic>
                  <Card.CharacteristicTitle title="species" />
                  <Card.CharacteristicValue value={character.species} />
                </Card.Characteristic>
                <Card.Characteristic>
                  <Card.CharacteristicTitle title="gender" />
                  <Card.CharacteristicValue value={character.gender} />
                </Card.Characteristic>
                <Card.Characteristic>
                  <Card.CharacteristicTitle title="origin" />
                  <Card.CharacteristicValue value={character.origin.name} />
                </Card.Characteristic>
                <Card.Characteristic>
                  <Card.CharacteristicTitle title="location" />
                  <Card.CharacteristicValue value={character.location.name} />
                </Card.Characteristic>
              </Card.CharacteristicsWrapper>
            </Card.Body>
          </Card>
        ))}
      {!isLoading && <Pagination
        prevPage={previousPageUrl ? gotoPrevPage : null}
        nextPage={nextPageUrl ? gotoNextPage : null}
      />}
    </Container>
  );
};
