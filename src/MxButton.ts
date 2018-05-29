import {UIComponent} from "./UIComponent";
import {Application} from "./Application";


export class MxButton extends UIComponent {
    private clickData: any;

    constructor() {
        super("button", "btn btn-primary");
    }

    protected createChildren() {
        this.element.setAttribute("type", "button");
        Application.addEventListener(this, this.id, "click", this.clickHandler);
    }

    private clickHandler(): void {
        if (this.clickData != null) {
            this.clickData.listener.call(this.clickData.$this, this);
        }
    }

    public onClick($this: any, func: Function): void {
        this.clickData = {$this: $this, listener: func};
    }

    public setLabel(label: string): void {
        this.element.innerText = label;
    }
}