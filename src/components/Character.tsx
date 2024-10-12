import clsx from 'clsx';

const Character = ({
  char,
  index,
  activeCharIndex,
  error,
  isPassedWord,
}: {
  char: string;
  index: number;
  activeCharIndex: number;
  error: boolean;
  isPassedWord: boolean;
}) => {
  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    <span
      key={index}
      className={clsx(
        '!w-[20px] font-black text-3xl bg-transparent text-center',
        index === activeCharIndex && 'text-blue-500 border-b-2 border-blue-500',
        (index < activeCharIndex || isPassedWord) && 'text-green-500',
        error && index === activeCharIndex && 'text-red-500'
      )}
    >
      {displayChar}
    </span>
  );
};

export default Character;
