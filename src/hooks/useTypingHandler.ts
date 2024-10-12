import { useEffect, useRef, useState } from 'react';
import clickAudio from '../assets/click.mp3';
import errorAudio from '../assets/error.mp3';
import windAudio from '../assets/wind.mp3';

const useTypingHandler = (originalText: string) => {
  console.log('originalText:', originalText);

  const words = originalText.split(' ').map((word) => {
    return word + ' ';
  });

  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
  const [activeCharIndex, setActiveCharIndex] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const typedChar = e.key;
      const currentWord = words[activeWordIndex];

      if (
        typedChar === 'Shift' ||
        typedChar === 'ArrowRight' ||
        typedChar === 'ArrowLeft'
      )
        return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
      }
      if (typedChar === 'Backspace' || typedChar === 'Delete') {
        new Audio(windAudio).play();
        if (activeCharIndex > 0) {
          setActiveCharIndex((prevIndex) => prevIndex - 1);
        } else if (activeWordIndex > 0) {
          setActiveWordIndex((prevIndex) => prevIndex - 1);
          setActiveCharIndex(words[activeWordIndex - 1].length - 1);
        }
        setError(false);
        return;
      }
      // Check if the current character is '\n' and the user pressed 'Enter'
      if (currentWord[activeCharIndex] === '\n') {
        if (typedChar === 'Enter') {
          setError(false);
          if (activeCharIndex < currentWord.length - 1) {
            setActiveCharIndex((prevIndex) => prevIndex + 1);
          } else if (activeWordIndex < words.length - 1) {
            setActiveWordIndex((prevIndex) => prevIndex + 1);
            setActiveCharIndex(0);
          }
          new Audio(clickAudio).play();
        } else {
          new Audio(errorAudio).play();
          setError(true);
        }
        return;
      }

      if (typedChar === currentWord[activeCharIndex]) {
        setError(false);
        if (activeCharIndex < currentWord.length - 1) {
          setActiveCharIndex((prevIndex) => prevIndex + 1);
        } else if (activeWordIndex < words.length - 1) {
          setActiveWordIndex((prevIndex) => prevIndex + 1);
          setActiveCharIndex(0);
        }
        new Audio(clickAudio).play();
      } else {
        new Audio(errorAudio).play();
        setError(true);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [words, activeWordIndex, activeCharIndex]);

  return {
    textRef,
    activeWordIndex,
    activeCharIndex,
    error,
    setError,
    setActiveWordIndex,
    setActiveCharIndex,
  };
};

export default useTypingHandler;
