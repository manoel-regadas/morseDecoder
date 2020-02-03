import '../styles/index.scss';
import Decoder from './morseDecoder';



const gettextAreaInput = document.querySelector('.decoder__textAreaInput')
const decoderButton = document.querySelector('.decoder__send')
const output = document.querySelector('.decoder__outPut')

const StartDecoder = new Decoder(gettextAreaInput,decoderButton,output)

StartDecoder.init()