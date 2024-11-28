import { Container } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Frame = (props: Props) => {
  return (
    <Container pt="5" maxW="6xl" py={12}>
      {props.children}
    </Container>
  );
};

export default Frame;
