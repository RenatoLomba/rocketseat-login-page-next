import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps {
  children: React.ReactNode;
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
}: CustomButtonProps) => {
  return (
    <Button
      height="50px"
      flex="1"
      backgroundColor="gray.600"
      marginLeft="6"
      transition="background-color 300ms ease-in-out"
      borderRadius="sm"
      _hover={{ backgroundColor: 'purple.500' }}
      display="flex"
      flexDir="row"
      gridGap="3"
      alignItems="center"
    >
      {children}
    </Button>
  );
};
