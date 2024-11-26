import React from 'react';

import { Button, Text } from '@chakra-ui/react';

type Props = {
  text: string;
};

const ButtonMain = (props: Props) => {
  return (
    <Button
      bg="#EF5A38"
      color="#fff"
      p={6}
      borderRadius="4xl"
      width="fit-content"
    >
      <Text fontFamily="">{props.text}</Text>
    </Button>
  );
};

export default ButtonMain;
