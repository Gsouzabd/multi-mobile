import React from 'react';
import {Box, Text} from 'native-base';
import { Title } from './Title';
import { ReactNode } from "react";
import { ITextProps } from "native-base/lib/typescript/components/primitives/Text";

interface SectionTitleProps extends ITextProps {
    children: ReactNode
}
const SectionTitle = ({ children, ...rest }) => {

  return (
      <Title 
        color={'blue.500'}
        textAlign='left' 
        m={5} 
        width='100%' 
        marginTop={10}
        {...rest}
      >
        {children}
      </Title>
  );
};

export default SectionTitle;