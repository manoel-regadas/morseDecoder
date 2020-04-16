import {
   characters
} from './morseCharacters';
// const radioInput = document.querySelector('.decoder__radioInput');
// const textAreaInput = document.querySelector('dacoder__textAreaInput');

class Decoder {
   constructor(textArea, button, output) {
      this._textArea = textArea;
      this._button = button;
      this._output = output;
      this._characters = characters;

   }
   get textArea() {
      return this._textArea
   }
   get button() {
      return this._button
   }
   get output() {
      return this._output
   }
   get characters() {
      return characters
   }

   init() {
      this._textArea.addEventListener('input', this.getTheText.bind(this))

   }

   getTheText() {
      this.output.innerHTML = ' ';
      this.textIntoArray = (this.textArea.value).toUpperCase().replace(/\s/g,'').split('');
      console.log(this.textIntoArray)
      this.matchTheArrays()
      this.animation()
      
   }

   matchTheArrays() {
      let clienteText = {}
      
      for(let i = 0; i < this.textIntoArray.length; i++){
         let letter = this.textIntoArray[i];
         if(letter !== ' ') clienteText[`${i}`] = letter
      }

      let clienteTextLength = Object.keys(clienteText).length
      console.log(clienteText)
      
      for(let i = 0; i < clienteTextLength; i++){         

         if(!this.characters[`${clienteText[i]}`]){
            this.output.insertAdjacentHTML('beforeend', 
                  `<i data-letter="[NON RECOGNIZED]" 
                        class="decoder__caracterWraper">
                     ${this.characters['#'].code}
                     </i>`)
         }  else{

            this.output.insertAdjacentHTML('beforeend', 
                  `<i data-letter="${this.characters[`${clienteText[i]}`].value}" 
                        class="decoder__caracterWraper">
                     ${this.characters[`${clienteText[i]}`].code}
                     </i>`)
         }         
      }
   }

   animation(){
      this.bit = this.output.querySelectorAll('.decoder__caracter')
      this.bit.forEach((element, index)=> {
         element.style = `transition: opacity 1s cubic-bezier(0.62, 0.07, 0.02, 1) ${index}s;`
         element.classList.add('decoder__animation')
      });
   } 

   // timer(i){
   //   return setInterval(() => {
   //       this.bit[i].classList.add('decoder__animation')
   //       return
   //    }, i * 100);
   // }
}

export default Decoder;