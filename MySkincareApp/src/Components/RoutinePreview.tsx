import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../store/hooks';

export default function RoutinePreview() {
  const products = useAppSelector((state) => state.skincare.products);

  return (
    <View>
      <Text>Preview: {products.slice(0, 3).map((p) => p.name).join(', ')}</Text>
    </View>
  );
}