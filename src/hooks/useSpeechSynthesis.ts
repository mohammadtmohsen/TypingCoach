import { useEffect, useState } from 'react';

const useSpeechSynthesis = (text: string) => {
  const [rate, setRate] = useState(0.5);
  const [voiceIndex, setVoiceIndex] = useState<number | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(-1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voicesOptions, setVoicesOptions] = useState<
    { value: number; label: string }[]
  >([]);
  const words = text.split(' ');

  useEffect(() => {
    const synth = window.speechSynthesis;
    const loadVoices = () => {
      const allVoices = synth.getVoices();
      const englishVoices = allVoices.filter((voice) =>
        voice.lang.startsWith('en')
      );
      setVoices(englishVoices);
      const options = englishVoices.map((voice, index) => ({
        value: index,
        label: `${voice.lang} - ${voice.name}`,
      }));
      setVoicesOptions(options);
    };

    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
  }, []);

  const voice = voiceIndex !== null ? voices[voiceIndex] : null;

  const handleSpeak = (startIndex = 0) => {
    handleStop();

    const utterance = new SpeechSynthesisUtterance(
      words.slice(startIndex).join(' ')
    );
    utterance.voice = voice;
    utterance.rate = rate;

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const charIndex = event.charIndex;
        const textUpToCharIndex = words
          .slice(startIndex)
          .join(' ')
          .substring(0, charIndex);
        const wordIndex = textUpToCharIndex.split(' ').length - 1 + startIndex;
        setCurrentWordIndex(wordIndex);
      }
    };

    utterance.onend = () => {
      setCurrentWordIndex(-1);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setCurrentWordIndex(-1);
  };

  return {
    rate,
    setRate,
    voiceIndex,
    setVoiceIndex,
    currentWordIndex,
    handleSpeak,
    handleStop,
    voicesOptions,
  };
};

export default useSpeechSynthesis;
