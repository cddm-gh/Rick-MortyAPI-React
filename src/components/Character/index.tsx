import React from "react";
import {
  Container, Header, Body, Image, Title,
  Text, CharacteristicsWrapper, Characteristic,
  CharacteristicTitle, CharacteristicValue,
} from "./styles";

export const Card = ({ children, ...restProps }) => {
  return (
    <Container className="card" {...restProps}>
      {children}
    </Container>
  );
};
Card.Header = function CardHeader({children}) {
  return (
    <Header>
      {children}
    </Header>
  );
}
Card.Body = function CardBody({ children, ...restProps }) {
  return (
    <Body className="card__body" {...restProps}>
      {children}
    </Body>
  );
};
Card.Title = function CardTitle({ children, ...restProps }) {
  return (
    <Title className="card__title" {...restProps}>
      {children}
    </Title>
  );
};
Card.Text = function CardText({ children, ...restProps }) {
  return (
    <Text className="card__text" {...restProps}>
      {children}
    </Text>
  );
};
Card.Image = function CardImage({ src, alt, ...restProps }) {
  return <Image src={src} alt={alt} className="card__image" {...restProps} />;
};
Card.CharacteristicsWrapper = function CardCharacteristics({ children }) {
  return <CharacteristicsWrapper>
    {children}
  </CharacteristicsWrapper>
}
Card.Characteristic = function CardCharacteristic({children}) {
  return <Characteristic>
    {children}
  </Characteristic>
}
Card.CharacteristicTitle = function CardCharacteristicTitle({ title }) {
return <CharacteristicTitle>{title}</CharacteristicTitle>
}
Card.CharacteristicValue = function CardCharacteristicValue({ value }) {
  return <CharacteristicValue>{value}</CharacteristicValue>
  }
