import { useRef } from 'react';
import useTypingHandler from '../hooks/useTypingHandler';
import { Word } from './word';
import { useTextContext } from '../hooks/useTextContext';

export const Type = () => {
  const { text } = useTextContext();
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
  console.log('text:', text);

  return (
    <div className='flex flex-col gap-4'>
      <div
        className='border rounded-md p-4 whitespace-pre-wrap break-words'
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

      <div className='flex justify-end'>
        <button
          className='clickable'
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
    </div>
  );
};
