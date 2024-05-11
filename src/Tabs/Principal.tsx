import React from 'react';
import { FlatList, VStack, Box, Text, Divider } from 'native-base';
import { Title } from '../components/Title';
import Search from '../components/Search';
import { depoimentos } from '../utils/Depoimentos';
import { CardTitle } from '../components/CardTitle';
import { SectionTitle } from '../components/SectionTitle';

const Principal = () => {
  return (
    <FlatList
      data={depoimentos}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <VStack
          style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}
        >
          <SectionTitle key="section-title">Boas vindas, Gabriel!</SectionTitle>
          <Search key="search" />
          <Title key="title" color="blue.800" mb={5}>
            Depoimentos
          </Title>
        </VStack>
      }
      renderItem={({ item }) => (
        <Box key={item.id} w="100%" borderRadius="lg" p={3}>
          <Text color="gray.300" fontSize="md" textAlign="justify" p={5}>
            {item.texto}
          </Text>
          <Text color="gray.500" fontSize="18px" fontWeight="bold" alignSelf="center" mt={5}>
            {item.autor}
          </Text>
        </Box>
      )}
      ItemSeparatorComponent={() => <Divider width={'80%'} alignSelf={'center'}/>}
    />
  );
};

export default Principal;
