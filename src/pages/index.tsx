import React from 'react';
import {
  Grid,
  Heading,
  Flex,
  Link,
  Button,
  Text,
  Image,
} from '@chakra-ui/react';
import { CustomDivider } from '../components/CustomDivider';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/images/rocketseat.svg" alt="Rocketseat" />

        <Heading fontSize="6xl" lineHeight="shorter" marginTop="16">
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding="16"
      >
        <CustomInput placeholder="E-mail" />

        <CustomInput placeholder="Senha" marginTop="2" />

        <Link
          alignSelf="flex-start"
          marginTop="2"
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          transition="color 300ms ease-in-out"
          _hover={{ color: 'purple.500' }}
        >
          Esqueci minha senha
        </Link>

        <Button
          marginTop="6"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          transition="background-color 300ms ease-in-out"
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENTRAR
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop="6">
          Não tem uma conta?{' '}
          <Link
            color="purple.600"
            fontWeight="bold"
            transition="color 300ms ease-in-out"
            _hover={{ color: 'purple.500' }}
          >
            Registre-se
          </Link>
        </Text>

        <CustomDivider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>
          <CustomButton>
            <Image
              boxSize="5"
              color="purple.500"
              src="/images/github.svg"
              alt="Github"
            />
            GITHUB
          </CustomButton>
        </Flex>
      </Flex>
    </Grid>
  );
}
