import { useEffect, useRef } from 'react';

export const useAdjustTextAreaHeight = (text: string) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextAreaHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextAreaHeight();
  }, [text]);

  return { textAreaRef };
};
