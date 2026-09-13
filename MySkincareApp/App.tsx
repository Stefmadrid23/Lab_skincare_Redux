import React from 'react';
import { SkincareProvider } from './src/contexts/SkincareContext';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <SkincareProvider>
      <AppNavigation />
    </SkincareProvider>
  );
}