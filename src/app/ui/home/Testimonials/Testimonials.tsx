import React from 'react';
import Frame from '../../Frame';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Avatar } from '@/components/ui/avatar';

const Testimonials = () => {
  return (
    <Frame>
      <Flex
        position="relative"
        direction="column"
        color="#F8EFDA"
        bg="#4C533A"
        borderRadius="2xl"
        py={12}
        px={24}
        gap={6}
      >
        <Box position="absolute" left={0}>
          <Image src="/testimonials.svg" width="1122" height="329" alt="" />
        </Box>
        <Box bg="#EF5A38" w="fit-content" py={2} px={4} borderRadius="4xl">
          Le storie di chi ha scelto di lavorare con me
        </Box>

        <Text>
          Sto lavorando con Filomena da circa 2 mesi per cambiare
          l&apos;approccio della mia pagina instagram ILOVECRETE e insieme
          abbiamo raggiunto ottimi risultati. Grazie a lei abbiamo iniziato a
          raccontare Creta e la mia esperienza portandola ad un livello più
          emozionale. I followers stanno aumentando e soprattutto si sta creando
          un legame con loro che va al di là dei servizi vendita, ma crea una
          relazione. Sempre disponibile e puntuale, consiglio vivamente di
          avvalersi della sua esperienza e competenza in campo di storytelling
          emotivo, scrittura caption e supporto creativo per website e social.
        </Text>

        <Flex align="center" gap={4}>
          <Avatar src="/testimonial-1.jpg" size="2xl" />
          <Box>
            <Text fontFamily="ITCSouvenir" fontSize="lg">
              Elena Cataldo
            </Text>
            <Text>Founder I Love Crete</Text>
          </Box>
        </Flex>
      </Flex>
    </Frame>
  );
};

export default Testimonials;
