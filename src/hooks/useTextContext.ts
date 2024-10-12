import { useContext } from 'react';
import { TextContext } from '../context/TextContext';
import { DEFAULT_TEXT } from '../constants';

export const useTextContext = () => {
  const context = useContext(TextContext);

  const resetText = () => {
    context?.setText(DEFAULT_TEXT);
  };

  if (!context) {
    throw new Error('useTextContext must be used within a TextProvider');
  }
  return { ...context, resetText };
};
