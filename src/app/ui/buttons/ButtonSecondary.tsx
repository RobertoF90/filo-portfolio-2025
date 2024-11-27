import React from 'react';

import { Button, Text } from '@chakra-ui/react';

type Props = {
  text: string;
};

const ButtonSecondary = (props: Props) => {
  return (
    <Button
      width="fit-content"
      bg="transparent"
      borderColor="#EF5A38"
      borderRadius="4xl"
      color="#EF5A38"
      p={6}
    >
      <Text fontWeight="bold">{props.text}</Text>
    </Button>
  );
};

export default ButtonSecondary;
