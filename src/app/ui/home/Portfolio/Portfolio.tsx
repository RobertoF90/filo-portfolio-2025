import React from 'react';
import Frame from '../../Frame';
import { Flex, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import HeadingMain from '../../HeadingMain';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <Frame>
      <Flex direction="column" align="center">
        <Flex
          direction={['column', 'column', 'column', 'row']}
          align="center"
          gap={12}
          pt="12"
        >
          <Flex borderRadius={24} overflow="hidden">
            <Image src="/image-3.svg" width={549} height={477} alt="" />
          </Flex>

          <Flex flex="50%" direction="column" gap={6}>
            <HeadingMain text="Portfolio Copywriting & Content Writing" />

            <Text textAlign="justify">
              Ecco alcuni esempi dei miei ultimi testi per siti web e social
              media di piccole attività, organizzazioni e progetti che hanno
              scelto i miei servizi.
            </Text>

            <Flex
              py={4}
              px={6}
              borderRadius={12}
              justify="space-between"
              align="center"
              bg="#4C533A1A"
            >
              <Text fontWeight="bold" fontFamily="ITCSouvenir" fontSize="2xl">
                Social Media
              </Text>

              <Button bg="#EF5A38" p={2}>
                <FaArrowRight color="#fff" />
              </Button>
            </Flex>

            <Flex
              py={4}
              px={6}
              borderRadius={12}
              justify="space-between"
              align="center"
              bg="#4C533A1A"
            >
              <Text fontWeight="bold" fontFamily="ITCSouvenir" fontSize="2xl">
                Blog & Articoli
              </Text>

              <Button bg="#EF5A38" p={2}>
                <FaArrowRight color="#fff" />
              </Button>
            </Flex>

            <Flex
              py={4}
              px={6}
              borderRadius={12}
              justify="space-between"
              align="center"
              bg="#4C533A1A"
            >
              <Text fontWeight="bold" fontFamily="ITCSouvenir" fontSize="2xl">
                Siti Web
              </Text>

              <Button bg="#EF5A38" p={2}>
                <FaArrowRight color="#fff" />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Frame>
  );
};

export default Portfolio;
