import React from 'react';
import { Card } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  image: string;
  title: string;
  text: string;
};

const CardItem = (props: Props) => {
  return (
    <Card.Root
      bg="#4C533A1A"
      border="none"
      width={['320px', '350px', '450px', '450px', '500px']}
      h={['275px', '275px', '235px', '235px', '235px']}
      p={2}
    >
      <Card.Body>
        <Image src={props.image} width={61} height={55} alt="map icon" />
        <Card.Title
          mt="4"
          mb="2"
          color="#4C533A"
          fontSize="2xl"
          fontFamily="ITCSouvenir"
        >
          {props.title}
        </Card.Title>
        <Card.Description color="#4C533A">{props.text}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default CardItem;
