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
      this.button.addEventListener('click', this.getTheText.bind(this))

   }

   getTheText() {
      this.output.innerHTML = ' ';
      this.textIntoArray = (this.textArea.value).toUpperCase().split('');
      this.matchTheArrays()
      //this.animation()
      
   }

   matchTheArrays() {
      let clienteText = {}
      
      for(let i = 0; i < this.textIntoArray.length; i++){
         let letter = this.textIntoArray[i];
         clienteText[i] = letter
      }
      for (let character of this.characters) {
         if (clienteText[character.value]) {

            this.output.insertAdjacentHTML('beforeend', 
               `<i data-letter="${character.value}" 
                     class="decoder__caracterWraper"
                     style="transition: opacity 1s cubic-bezier(0.62, 0.07, 0.02, 1) 0.7s;">
                  ${character.code}
                  </i>`)
         }

      }
      
      
   }

   // animation(){
   //    this.bit = this.output.querySelectorAll('.decoder__caracter')
   //    for(let i = 0; i < this.bit.length; i++){
   //       this.timer(i)
   //    } 
   // }

   // timer(i){
   //   return setInterval(() => {
   //       this.bit[i].classList.add('decoder__animation')
   //       return
   //    }, i * 100);
   // }
}

export default Decoder;