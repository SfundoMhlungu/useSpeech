export default function useSpeech(): {
    Speak: (txt: string) => void;
    speak_utils: {
        Voices: SpeechSynthesisVoice[];
        selectedVoice: SpeechSynthesisVoice | undefined;
        pitch: number;
        rate: number;
        setVoice: (voiceName: string) => void;
        setPitch: (pitch: number) => void;
        setRate: (rate: number) => void;
    };
};
//# sourceMappingURL=index.d.ts.map