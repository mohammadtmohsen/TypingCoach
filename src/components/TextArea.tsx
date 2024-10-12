import { useAdjustTextAreaHeight } from '../hooks/useAdjustTextAreaHeight';
import { useTextContext } from '../hooks/useTextContext';

export const TextArea = () => {
  const { text, setText, resetText } = useTextContext();

  const { textAreaRef } = useAdjustTextAreaHeight(text);

  return (
    <div className='flex flex-col gap-4'>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => {
          const value = e.target.value;
          setText(value);
        }}
        className='p-4 rounded-md w-full h-fit font-black text-3xl border '
      />

      <div className='flex justify-end'>
        <button className='clickable' onClick={resetText}>
          reset
        </button>
      </div>
    </div>
  );
};
