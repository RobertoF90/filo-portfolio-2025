import React from 'react';
import Frame from '../../Frame';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import HeadingMain from '../../HeadingMain';
import CardItem from './CardItem';
import map from './icons/map.svg';
import axe from './icons/axe.svg';
import camp from './icons/camp.svg';
import mic from './icons/mic.svg';

const Cards = () => {
  return (
    <Frame>
      <Flex direction="column" align="center" gap={6}>
        <HeadingMain text={'Soluzioni pensate per te'} />
        <Box textAlign="center">
          <Text>Ogni attività è unica, e lo è anche il mio approccio.</Text>
          <Text>Ecco come posso aiutarti:</Text>
        </Box>

        <Stack gap="4" direction="row" wrap="wrap" justify="center">
          <CardItem
            image={map}
            title="Strategie di comunicazione online"
            text="Ti aiuto a pianificare e implementare strategie su misura, pensate per
          il tuo pubblico e i tuoi obiettivi."
          />

          <CardItem
            image={camp}
            title="Creazione e gestione dei social media"
            text="Mi occupo della tua presenza digitale: dai contenuti visivi ai testi, fino alla pubblicazione."
          />

          <CardItem
            image={axe}
            title="Copywriting professionale"
            text="Scrivo testi che parlano ai tuoi clienti e raccontano la tua storia."
          />

          <CardItem
            image={mic}
            title="Strategie di comunicazione online"
            text="Voglio che tu abbia gli strumenti per muoverti con sicurezza. Con le mie consulenze, puoi imparare a gestire la tua comunicazione in autonomia."
          />
        </Stack>
      </Flex>
    </Frame>
  );
};

export default Cards;
