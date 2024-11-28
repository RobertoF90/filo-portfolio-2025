import React from 'react';
import Frame from '../../Frame';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import HeadingMain from '../../HeadingMain';
import ButtonSecondary from '../../buttons/ButtonSecondary';

const About = () => {
  return (
    <Frame>
      <Flex direction="column" align="center">
        <Image src="/mountains.svg" width="478" height="120" alt="steps" />

        <Flex
          direction={['column', 'column', 'column', 'row']}
          align="center"
          gap={12}
          pt="12"
        >
          <Flex flex="50%" direction="column" gap={6}>
            <HeadingMain text="Semplificare il digitale, valorizzare il tuo business" />

            <Text>
              Mi chiamo Filomena e sono qui per semplificarti la vita nel mondo
              della comunicazione digitale.
            </Text>

            <Text>
              Grazie alla mia esperienza con piccole e medie imprese italiane,
              ho sviluppato un approccio che unisce professionalità e empatia.
            </Text>

            <Text>
              Il mio obiettivo è aiutarti a ottenere risultati concreti e a
              sentirti finalmente sicuro nella tua strategia online.
            </Text>

            <ButtonSecondary text="Scopri come posso aiutarti" />
          </Flex>
          <Flex borderRadius={24} overflow="hidden">
            <Image src="/image-2.jpg" width={549} height={477} alt="" />
          </Flex>
        </Flex>
      </Flex>
    </Frame>
  );
};

export default About;
