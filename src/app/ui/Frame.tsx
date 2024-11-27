import { Container } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const Frame = (props: Props) => {
  return (
    <Container pt="5" maxW="6xl" py={12}>
      {props.children}
    </Container>
  );
};

export default Frame;
