import {useEffect, useState}  from "react";

const synth = window.speechSynthesis;

let voices = synth.getVoices()
// console.log(synth.getVoices(), "voices on top")
if(speechSynthesis.onvoiceschanged !== undefined){
    // for chrome
    speechSynthesis.onvoiceschanged = () => {
        voices = synth.getVoices()
        // console.log('for chrome')
    };
}

export default function useSpeech(){
      const [Voices, setVoices] = useState<SpeechSynthesisVoice[]>(voices);
      const [selectedVoice, setSelectVoice] = useState<SpeechSynthesisVoice | undefined>(voices[0])
      const [pitch_, setPitch_] = useState(1)
      const [rate_, setRate_] = useState(1)

     useEffect(()=> {

          // if the outside onvoicechanged failed

         if(speechSynthesis.onvoiceschanged !== undefined){
            // console.log("Only run in chrome")
            speechSynthesis.onvoiceschanged = () => {
                voices = synth.getVoices();
                // console.log("voices", voices)
                setVoices(voices)
            }
         }else{
              voices = synth.getVoices();
            //   console.log("voices", voices)
              setVoices(voices)
         }
      }, [])









    const Speak = (txt: string) => {
        const utter = new SpeechSynthesisUtterance(txt);
        if(selectedVoice){
            utter.voice = selectedVoice
        }
        utter.pitch = pitch_;
        utter.rate = rate_
        synth.speak(utter);

    }


    const setVoice = (voiceName: string) => {
        for(const voice of voices){
            if(voice.name === voiceName){
                setSelectVoice(voice);
                return;
            }
        }

    }

    const setPitch = (pitch: number) => {
        setPitch_(pitch)
    }

    const setRate = (rate: number) => {
        setRate_(rate)
    }


    const speak_utils: {
        Voices: SpeechSynthesisVoice[];
        selectedVoice: SpeechSynthesisVoice | undefined;
        pitch: number;
        rate: number;
        setVoice: (voiceName: string) => void;
        setPitch: (pitch: number) => void;
        setRate: (rate: number) => void;
    } = {
        Voices,
        selectedVoice,
        pitch: pitch_,
        rate: rate_,
        setVoice,
        setPitch,
        setRate,
    }

    return {Speak, speak_utils}
}

