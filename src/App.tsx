import { useState } from 'react';
import Speak from './components/Speak';
import { Read } from './components/Read';

function App() {
  const originalText =
    'Geology is the study of rocks, Earth, and how our planet changes over time. Geologists are like detectives, investigating what Earth is made of and how things like mountains, rivers, and volcanoes form. They explore different types of rocks, from shiny crystals to rough stones, and learn about fossils, which are the remains of plants and animals from millions of years ago. Geology helps us understand Earth’s past and predict changes like earthquakes and landslides, making it super important for keeping people and nature safe!';

  const [text, setText] = useState<string>(originalText);

  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='uppercase'>Typing Coach</h1>
      <textarea
        value={text}
        onChange={(e) => {
          const value = e.target.value;
          setText(value);
        }}
        className='p-4 rounded-md w-full h-32'
      />

      <Speak text={text} />

      <Read text={text} />
    </div>
  );
}

export default App;
