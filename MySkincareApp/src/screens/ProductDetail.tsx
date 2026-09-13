import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSkincare } from '../contexts/SkincareContext';

export default function ProductDetail({ route }: any) {
  const { productId } = route.params;
  const { products, deleteProduct, addReview } = useSkincare();
  const product = products.find((p) => p.id === productId);

  if (!product) return <Text>Producto no encontrado</Text>;

  return (
    <View>
      <Text>{product.name}</Text>
      <Button
        title="Agregar review"
        onPress={() =>
          addReview(product.id, { id: Date.now().toString(), rating: 5, comment: 'Excelente' })
        }
      />
      <Button title="Eliminar" onPress={() => deleteProduct(product.id)} />
    </View>
  );
}