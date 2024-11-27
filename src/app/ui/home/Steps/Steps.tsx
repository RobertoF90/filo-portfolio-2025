import React from 'react';
import Frame from '../../Frame';
import { Flex, Text, List } from '@chakra-ui/react';
import Image from 'next/image';
import HeadingMain from '../../HeadingMain';
import ButtonSecondary from '../../buttons/ButtonSecondary';

const steps = [
  'Primo passo:',
  'Secondo passo:',
  'Terzo passo:',
  'Ultimo passo:',
];

const items = [
  'Ci conosciamo e analizziamo la tua situazione.',
  'Creo una strategia pensata per te.',
  'Implementiamo insieme le soluzioni più efficaci.',
  'Monitoriamo i risultati e continuiamo a migliorare.',
];

const Steps = () => {
  return (
    <Frame>
      <Flex direction="column" align="center">
        <Image src="/steps.svg" width="478" height="120" alt="steps" />

        <Flex
          direction={['column', 'column', 'column', 'row']}
          align="center"
          gap={12}
          pt="12"
        >
          <Flex borderRadius={24} overflow="hidden">
            <Image src="/image-1.jpg" width={549} height={477} alt="" />
          </Flex>

          <Flex flex="50%" direction="column" gap={6}>
            <HeadingMain text="Il tuo percorso verso il successo digitale" />

            <Text>
              Lavorare insieme significa intraprendere un percorso chiaro e
              strutturato verso i tuoi obiettivi digitali. Ti guiderò passo dopo
              passo, trasformando idee in strategie e strategie in risultati
              concreti.
            </Text>

            <Text>Ecco cosa puoi aspettarti dal nostro viaggio condiviso:</Text>

            <List.Root as="ol" listStyle="decimal" px={4}>
              {items.map((item, index) => (
                <List.Item key={index} _marker={{ color: '#EF5A38' }}>
                  <Text fontWeight="bold" color="#EF5A38">
                    {steps[index]}
                  </Text>
                  {item}
                </List.Item>
              ))}
            </List.Root>

            <ButtonSecondary text="Contattami" />
          </Flex>
        </Flex>
      </Flex>
    </Frame>
  );
};

export default Steps;
