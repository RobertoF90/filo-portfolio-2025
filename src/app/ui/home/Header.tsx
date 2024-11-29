'use client';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import ButtonMain from '../buttons/ButtonMain';
import Frame from '../Frame';

const Header = () => {
  return (
    <Frame>
      <Flex
        direction={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row',
        ]}
        align="center"
        gap={4}
      >
        <Flex direction="column" gap={8} flex="50%">
          <Heading
            as="h1"
            fontSize="5xl"
            fontFamily="ITCSouvenir"
            lineHeight="1"
            textTransform="capitalize"
          >
            La tua guida digitale attraverso sentieri inesplorati
          </Heading>
          <Text textAlign="justify">
            Insieme possiamo trasformare la tua presenza online.
          </Text>

          <Text textAlign="justify">
            Con il mio supporto, esplorerai nuove strade per far crescere la tua
            attività nel mondo digitale.
          </Text>

          <ButtonMain text="Scopri Come Posso Aiutarti" />
        </Flex>

        <Box flex="50%">
          <Image src="/hero.svg" alt="hero" width={555} height={448} />
        </Box>
      </Flex>
    </Frame>
  );
};

export default Header;
