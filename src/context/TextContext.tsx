import { createContext, useEffect, useState } from 'react';
import { DEFAULT_TEXT } from '../constants';

interface TextContextProps {
  text: string;
  setText: (text: string) => void;
}

export const TextContext = createContext<TextContextProps | undefined>(
  undefined
);

export const TextProvider = ({ children }: { children: React.ReactNode }) => {
  const [text, setText] = useState<string>(() => {
    const text = localStorage.getItem('text');
    return text ?? DEFAULT_TEXT;
  });

  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};
