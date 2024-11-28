import React from 'react';
import { Icon, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Flex p={8} bg="#4C533A" justify="space-between" align="center">
        <Image src="/logo-footer.svg" alt="logo" width={195} height={74} />

        <Flex gap={8} color="#F8EFDA">
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
    </footer>
  );
};

export default Footer;
