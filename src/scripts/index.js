import '../styles/index.scss';
import Decoder from './morseDecoder';



const gettextAreaInput = document.querySelector('.decoder__textAreaInput')
const decoderButton = document.querySelector('.decoder__send')
const output = document.querySelector('.decoder__outPut')
const deleteButton = document.querySelector('.decoder__deleteButton')
const changeInputButton = document.querySelector('.decoder__changeInput')

const StartDecoder = new Decoder(gettextAreaInput,decoderButton,output,deleteButton,changeInputButton)

StartDecoder.init()