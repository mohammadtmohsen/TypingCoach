import clsx from 'clsx';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis';
import CustomSelect from './CustomSelect';

const Speak = ({ text }: { text: string }) => {
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
    <>
      <label htmlFor='voice'>Voice</label>
      <CustomSelect
        id='voice'
        name='voice'
        value={
          voicesOptions.find((option) => option.value === voiceIndex) || null
        }
        onChange={(selectedOption) => {
          setVoiceIndex(selectedOption ? selectedOption.value : null);
        }}
        options={voicesOptions}
        placeholder='Select a voice'
      />
      <div>
        <div>
          <label htmlFor='rate'>Rate: </label>
          <div className='rate-value'>{rate}</div>
        </div>
        <input
          type='range'
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

      <div
        className='border p-4 mt-2 rounded-md'
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {text.split(' ').map((word, index) => (
          <span
            key={index}
            onClick={() => handleSpeak(index)}
            className={clsx(
              index === currentWordIndex ? 'bg-blue-900' : 'transparent'
            )}
          >
            {word}{' '}
          </span>
        ))}
      </div>

      {window.speechSynthesis.speaking ? (
        <button type='button' onClick={handleStop}>
          Stop
        </button>
      ) : (
        <button type='button' onClick={() => handleSpeak()}>
          Speak
        </button>
      )}
    </>
  );
};

export default Speak;
