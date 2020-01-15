import {dot, dash, characters} from './morseCharacters';


const radioInput = document.querySelector('.decoder__radioInput');
const textAreaInput = document.querySelector('dacoder__textAreaInput');

class Decoder {
    constructor(textArea, button, output, characters){
         this.textArea = textArea;
         this.button = button;
         this.output = output;
         this.characters = characters;
         
    }
    
    init(){
        this.button.addEventListener('click', this.getTheText.bind(this))

    }

    getTheText(){
        this.textIntoArray = (this.textArea.value).toUpperCase().split('');
        this.matchThearrays()
    }
    
    matchThearrays(){
        this.textIntoArray.forEach(element => {
             for(let character of this.characters){
                 if(element === character.value){
                    this.output.insertAdjacentHTML('beforeend',character.code)
                 }
             }
        });
    }
} 

const gettextAreaInput = document.querySelector('.decoder__textAreaInput')
const decoderButton = document.querySelector('.decoder__send')
const output = document.querySelector('.decoder__outPut')

const StartDecoder = new Decoder(gettextAreaInput,decoderButton,output,characters)

StartDecoder.init()

export default Decoder; 