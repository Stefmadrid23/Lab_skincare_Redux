import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../store/hooks';
import RoutinePreview from '../components/RoutinePreview';

export default function Home() {
  const navigation = useNavigation<any>();
  const products = useAppSelector((state) => state.skincare.products);

  return (
    <View>
      <Text>Tienes {products.length} productos</Text>
      <Button title="Ir a Products" onPress={() => navigation.navigate('Products')} />
      <RoutinePreview />
    </View>
  );
}