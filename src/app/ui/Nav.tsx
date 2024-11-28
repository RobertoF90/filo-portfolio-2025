'use client';
import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';
import ButtonMain from './buttons/ButtonMain';
const Nav = () => {
  return (
    <Container>
      <Flex justify="space-between" align="center">
        <Box pt={4}>
          <Image src="/Logo.svg" alt="logo" width={195} height={74} />
        </Box>

        <ButtonMain text="Contattami" />
      </Flex>
    </Container>
  );
};

export default Nav;
