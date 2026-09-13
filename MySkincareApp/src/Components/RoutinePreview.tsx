import React from 'react';
import { View, Text } from 'react-native';
import { useSkincare } from '../contexts/SkincareContext';

export default function RoutinePreview() {
  const { products } = useSkincare();

  return (
    <View>
      <Text>Preview: {products.slice(0, 3).map((p) => p.name).join(', ')}</Text>
    </View>
  );
}