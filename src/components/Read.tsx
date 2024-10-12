import { useRef } from 'react';
import useTypingHandler from '../hooks/useTypingHandler';
import Word from './word';

export const Read = ({ text }: { text: string }) => {
  const {
    activeWordIndex,
    activeCharIndex,
    error,
    setError,
    setActiveWordIndex,
    setActiveCharIndex,
    textRef,
  } = useTypingHandler(text);

  const resetButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className='flex flex-col gap-4 '>
      <div
        className='flex flex-wrap border rounded-md p-4 gap-y-4'
        ref={textRef}
        tabIndex={0}
      >
        {text.split(' ').map((word, wordIndex) => (
          <Word
            key={wordIndex}
            word={word}
            wordIndex={wordIndex}
            activeWordIndex={activeWordIndex}
            activeCharIndex={activeCharIndex}
            error={error}
          />
        ))}
      </div>

      <button
        ref={resetButtonRef}
        onClick={() => {
          setActiveWordIndex(0);
          setActiveCharIndex(0);
          setError(false);
          resetButtonRef.current?.blur();
        }}
      >
        reset
      </button>
    </div>
  );
};
