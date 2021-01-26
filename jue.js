class Jue{
    constructor({el, data}){
        this.el = el;
        this.data = data;
        this._init();
    }
    _init(){
        var el = document.querySelector(this.el);
        for(var key in this.data){
            var value = el.innerText;
            el.innerText = value.replace(`{{${key}}}`,this.data[key]);
        }

    }
}
