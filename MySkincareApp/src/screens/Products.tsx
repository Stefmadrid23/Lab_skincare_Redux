import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addProduct } from '../store/slices/skincareSlice';
import { useNavigation } from '@react-navigation/native';

export default function Products() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.skincare.products);
  const [name, setName] = useState('');
  const navigation = useNavigation<any>();

  return (
    <View>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} />
      <Button
        title="Agregar"
        onPress={() => {
          dispatch(addProduct({ name, brand: 'Generico', category: 'General' }));
          setName('');
        }}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}