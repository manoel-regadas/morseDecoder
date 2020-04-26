
class Tooltip {
    constructor(){
        this._codeWrapper;
    }
    get codeWrapper(){
        return this._codeWrapper;
    }
    set codeWrapper(value){
        return this._codeWrapper = value
    }

    init(){
        this.codeWrapper.forEach(element => {
           element.addEventListener('mouseover', this.activeToolip.bind(this));
        })
        this.codeWrapper.forEach(element => {
           element.addEventListener('mouseout', this.desactiveToolip.bind(this));
        })
    }
    
    activeToolip({target}){
        this.createTooltip(target)
        
    }

    createTooltip(value){
        let toolTip = document.createElement('I');
        toolTip.innerHTML = `<i>${value.getAttribute('data-letter')}</i>`
        toolTip.classList.add('decoder__toolTip')
        value.appendChild(toolTip)
        value.classList.add('selected')
        
    }

    desactiveToolip({target}){
        this.removeTooltip(target)
        
    }

    removeTooltip(value){
        value.lastChild.remove()
        value.classList.remove('selected')
       
    }
}

export {Tooltip}