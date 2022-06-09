class PQuery {
    constructor(selector) {
        // target the element
        if (
        (selector === window) |
        (selector === document)
        ) {
        this.elements = [selector];
        } else {
        this.elements =
            document.querySelectorAll(selector);
        }
    }
    html(innerhtml) {
        this.elements.forEach((item) => {
        item.innerHTML = innerhtml;
        });
        return this;
    }
    hide() {
        this.elements.forEach((item) => {
        item.preDispaly = item.style.display;
        item.style.display = 'none';
        });
        return this;
    }
    on(eventType, callback) {
        this.elements.forEach((item) => {
        item.addEventListener(
            eventType,
            callback
        );
        });
        return this;
    }
    show() {
        this.elements.forEach((item) => {
        item.style.display = item.preDispaly;
        });
        return this;
    }
    textColor(colorValue) {
        this.elements.forEach((item) => {
        item.style.color = colorValue;
        });
        return this;
    }
    fontSize (size) {
        this.elements.forEach((item) => {
        item.style.fontSize = size;
        });
        return this;
    }
    changeHeight(heightVal){
        this.elements.forEach((item) => {
        item.style.fontSize = heightVal;
        });
        return this;
    }
    removeClassName(className){
        this.elements.forEach((item) => {
        item.classList.remove(className)
        });
        return this;
    }
    
}

const $$ = function (selector) {
    return new PQuery(selector);
};

$$('button.color-btn').textColor("red")
$$('button.size-btn').fontSize("6rem")
$$('button.height-btn').changeHeight("36px")
$$('button.class-btn').removeClassName("class-btn")