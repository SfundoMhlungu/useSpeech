# Getting Started 

a simple speech synthesis hook, built in Typescript.




## installation 

```cmd

npm i use-speech18

```

## usage 


```jsx
import useSpeech from "use-speech18"

function App(){
  const {Speak, speak_utils} = useSpeech()

}

```

### speak_utils

functionality: 

```js
    speak_utils:
        Voices: SpeechSynthesisVoice[];
        selectedVoice: SpeechSynthesisVoice | undefined;
        pitch: number;
        rate: number;
        setVoice: (voiceName: string) => void;
        setPitch: (pitch: number) => void;
        setRate: (rate: number) => void;

    Speak:
       Speak: (txt: string) => void

```

example

```jsx
const text = `
I did not kill Joffrey, but I wish that I had! Watching your vicious bastard die gave me more relief than a thousand lying whores!,  I wish I was the monster you think I am! I wish I had enough poison for the whole pack of you! I would gladly give my life to watch you all swallow it!,  I will not give my life for Joffery's murder and I know I'll get no justice here, so I will let the gods decide my fate. I demand a trial by combat

`

function App(){
  const {Speak, speak_utils} = useSpeech()
  
useEffect(()=> {
    console.log("array of avalaible voices", speak_utils.Voices)
    speak_utils.setVoice(speak_utils.Voices[1].name)
    console.log(speak_utils.selectedVoice, "currently selected voice")   
  
  }, [speak_utils.Voices])

}

return (
 <div className="app">
 <button onClick={() => Speak(text)}>speak</button>


</div>

)


```

