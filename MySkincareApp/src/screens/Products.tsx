import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useSkincare } from '../contexts/SkincareContext';

export default function Products() {
  const { products, addProduct } = useSkincare();
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} />
      <Button
        title="Agregar"
        onPress={() => {
          addProduct({ name, brand: 'Generico', category: 'General' });
          setName('');
        }}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}