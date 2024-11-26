'use client';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import ButtonMain from '../buttons/ButtonMain';

const Header = () => {
  return (
    <Container pt="5" maxW="6xl">
      <Flex direction={['column-reverse', 'row']} align="center" gap={4}>
        <Flex direction="column" gap={8} flex="50%">
          <Heading
            as="h1"
            color="#4C533A"
            fontSize="5xl"
            fontFamily="ITCSouvenir"
            lineHeight="1"
            textTransform="capitalize"
          >
            La tua guida digitale attraverso sentieri inesplorati
          </Heading>
          <Text fontSize={21}>
            Insieme possiamo trasformare la tua presenza online.
          </Text>

          <Text fontSize={21}>
            Con il mio supporto, esplorerai nuove strade per far crescere la tua
            attività nel mondo digitale.
          </Text>

          <ButtonMain text="Scopri Come Posso Aiutarti" />
        </Flex>

        <Box flex="50%">
          <Image src="/hero.svg" alt="hero" width={555} height={448} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Header;
