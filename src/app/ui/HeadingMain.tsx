import { Heading } from '@chakra-ui/react';
import React from 'react';

type Props = {
  text: string;
};

const HeadingMain = (props: Props) => {
  return (
    <Heading
      fontSize="4xl"
      fontFamily="ITCSouvenir"
      textAlign="center"
      lineHeight={1.05}
    >
      {props.text}
    </Heading>
  );
};

export default HeadingMain;
