import React from 'react';
import { View, Text } from 'react-native';
import { useSkincare } from '../contexts/SkincareContext';
import RoutinePreview from '../components/RoutinePreview';

export default function Home() {
  const { products } = useSkincare();

  return (
    <View>
      <Text>Tienes {products.length} productos</Text>
      <RoutinePreview />
    </View>
  );
}