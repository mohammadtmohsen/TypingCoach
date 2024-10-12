import { Character } from './Character';

export const Word = ({
  word,
  wordIndex,
  activeWordIndex,
  activeCharIndex,
  error,
}: {
  word: string;
  wordIndex: number;
  activeWordIndex: number;
  activeCharIndex: number;
  error: boolean;
}) => {
  const isPassedWord = wordIndex < activeWordIndex;

  return (
    <span className='border-b border-b-gray-600 py-1 whitespace-nowrap'>
      {[...word.split(''), ' '].map((char, index) => {
        if (char === '\n') {
          return <br key={index} className='w-full h-0' />;
        }
        return (
          <Character
            key={index}
            char={char}
            index={index}
            activeCharIndex={
              wordIndex === activeWordIndex ? activeCharIndex : -1
            }
            error={wordIndex === activeWordIndex && error}
            isPassedWord={isPassedWord}
          />
        );
      })}
    </span>
  );
};
