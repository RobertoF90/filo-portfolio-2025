import React from 'react';
import Frame from '../../Frame';
import { Flex, Text } from '@chakra-ui/react';
import HeadingMain from '../../HeadingMain';
import Image from 'next/image';

const Collabs = () => {
  return (
    <Frame>
      <Flex direction="column" align="center">
        <HeadingMain text="Ho scritto e creato per" />

        <Text pt={4}>
          Ogni attività è unica, e lo è anche il mio approccio.
        </Text>

        <Text pb={4}>Ecco come posso aiutarti:</Text>

        <Flex direction={['column', 'row']}>
          <Image
            src="/logo-eduvita.svg"
            width="191"
            height="57"
            alt="eduvita logo"
          />
          <Image
            src="/logo-eduvita.svg"
            width="191"
            height="57"
            alt="eduvita logo"
          />
          <Image
            src="/logo-eduvita.svg"
            width="191"
            height="57"
            alt="eduvita logo"
          />
          <Image
            src="/logo-eduvita.svg"
            width="191"
            height="57"
            alt="eduvita logo"
          />
          <Image
            src="/logo-eduvita.svg"
            width="191"
            height="57"
            alt="eduvita logo"
          />
        </Flex>
      </Flex>
    </Frame>
  );
};

export default Collabs;
