import { useRef, useState } from 'react';
import useTypingHandler from './hooks/useTypingHandler';
import Word from './components/word';
import Speak from './components/Speak';

function App() {
  const originalText =
    'Geology is the study of rocks, Earth, and how our planet changes over time. Geologists are like detectives, investigating what Earth is made of and how things like mountains, rivers, and volcanoes form. They explore different types of rocks, from shiny crystals to rough stones, and learn about fossils, which are the remains of plants and animals from millions of years ago. Geology helps us understand Earth’s past and predict changes like earthquakes and landslides, making it super important for keeping people and nature safe!';

  const [text, setText] = useState<string>(originalText);

  const resetButtonRef = useRef<HTMLButtonElement>(null);

  const {
    activeWordIndex,
    activeCharIndex,
    error,
    setError,
    setActiveWordIndex,
    setActiveCharIndex,
    textRef,
  } = useTypingHandler(text);

  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='uppercase'>typing</h1>
      <textarea
        value={text}
        onChange={(e) => {
          const value = e.target.value;
          setText(value);
        }}
        className='p-4 rounded-md w-full h-32'
      />

      {/* <Speak text={text} /> */}
      <Speak text={text} />

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
}

export default App;
