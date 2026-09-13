import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSkincare } from '../contexts/SkincareContext';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addReview, deleteProduct } from '../store/slices/skincareSlice';

export default function ProductDetail({ route }: any) {
  const { productId } = route.params;
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.skincare.products);
  const product = products.find((p) => p.id === productId);

  if (!product) return <Text>Producto no encontrado</Text>;

  return (
    <View>
      <Text>{product.name}</Text>
      <Button
        title="Agregar review"
        onPress={() =>
          dispatch(addReview({ productId: product.id, review: { id: Date.now().toString(), rating: 5, comment: 'Excelente' } }))
        }
      />
      <Button title="Eliminar" onPress={() => dispatch(deleteProduct(product.id))} />
    </View>
  );
}