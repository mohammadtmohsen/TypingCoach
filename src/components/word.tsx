import Character from './Character';

const Word = ({
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
    <span className='flex flex-wrap border-b border-b-gray-600 xpy-1'>
      {[...word.split(''), ' '].map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
          activeCharIndex={wordIndex === activeWordIndex ? activeCharIndex : -1}
          error={wordIndex === activeWordIndex && error}
          isPassedWord={isPassedWord}
        />
      ))}
    </span>
  );
};

export default Word;
