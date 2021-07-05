import React from 'react';
import { Input, InputProps } from '@chakra-ui/react';

export const CustomInput: React.FC<InputProps> = () => {
  return (
    <Input
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="purple.500"
      borderRadius="sm"
      border="none"
    />
  );
};
