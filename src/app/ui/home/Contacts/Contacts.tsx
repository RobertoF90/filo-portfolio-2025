import React from 'react';
import Frame from '../../Frame';
import { Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import HeadingMain from '../../HeadingMain';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contacts = () => {
  return (
    <Frame>
      <Flex direction="column" align="center">
        <Image src="/mountains.svg" width="438" height="139" alt="steps" />

        <Flex direction="column" align="center" gap={12} pt="12" px={[4, 24]}>
          <HeadingMain text="Pronto a iniziare il tuo percorso digitale?" />

          <Text>
            Sono qui per aiutarti a raggiungere i tuoi obiettivi con un
            approccio personalizzato, professionale e orientato ai risultati.
          </Text>

          <Text>
            Che si tratti di consulenze, gestione dei social o sviluppo di una
            strategia su misura, sono pronta ad accompagnarti passo dopo passo.
          </Text>

          <Flex gap={4} color="#EF5A38">
            <Icon size="lg">
              <FaInstagram />
            </Icon>
            <Icon size="lg">
              <FaFacebook />
            </Icon>
            <Icon size="lg">
              <FaLinkedin />
            </Icon>
          </Flex>
        </Flex>
      </Flex>
    </Frame>
  );
};

export default Contacts;
