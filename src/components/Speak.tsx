import clsx from 'clsx';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis';
import CustomSelect from './CustomSelect';
import { useTextContext } from '../hooks/useTextContext';

export const Speak = () => {
  const { text } = useTextContext();

  const {
    rate,
    setRate,
    voiceIndex,
    setVoiceIndex,
    currentWordIndex,
    handleSpeak,
    handleStop,
    voicesOptions,
  } = useSpeechSynthesis(text);

  return (
    <div className='flex flex-col gap-4'>
      <div className='border p-4 rounded-md' style={{ whiteSpace: 'pre-wrap' }}>
        {text.split(' ').map((word, index) => (
          <span
            key={index}
            onClick={() => handleSpeak(index)}
            className={clsx(
              index === currentWordIndex ? 'bg-blue-900' : 'transparent',
              'cursor-pointer font-black text-3xl'
            )}
          >
            {word}{' '}
          </span>
        ))}
      </div>
      <div className='flex items-start justify-between gap-5'>
        <div className='flex-1'>
          <label htmlFor='voice'>Voice</label>
          <CustomSelect
            id='voice'
            name='voice'
            value={
              voicesOptions.find((option) => option.value === voiceIndex) ||
              null
            }
            onChange={(selectedOption) => {
              setVoiceIndex(selectedOption ? selectedOption.value : null);
            }}
            options={voicesOptions}
            placeholder='Select a voice'
          />
        </div>
        <div className='flex-1'>
          <div>
            <label htmlFor='rate'>Speed: </label>
            <div className='rate-value'>{rate}</div>
          </div>
          <input
            type='range'
            className='w-full'
            min='0.1'
            max='2'
            defaultValue='0.5'
            step='0.1'
            id='rate'
            onChange={(event) => {
              setRate(Number(event.target.value));
            }}
          />
        </div>
        <div>
          {window.speechSynthesis.speaking ? (
            <button className='clickable' type='button' onClick={handleStop}>
              Stop
            </button>
          ) : (
            <button
              className='clickable'
              type='button'
              onClick={() => handleSpeak()}
            >
              Speak
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
