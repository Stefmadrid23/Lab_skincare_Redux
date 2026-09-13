import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSkincare } from '../contexts/SkincareContext';

export default function Routines() {
  const { products } = useSkincare();

  return (
    <View>
      <Text>Mi rutina</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}