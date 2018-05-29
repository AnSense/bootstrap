import {Application} from "./Application";

export class UIComponent {
    protected element: HTMLElement;
protected id:string;
    constructor(tagName:string,className:string) {
        this.element = Application.createElement(tagName,className);
        this.id=this.element.id;
        this.createChildren();
    }

    protected createChildren(): void {

    }

    public update(): void {

    }
    public getElement():HTMLElement{
        return this.element;
    }
    public getID():string{
        return this.id;
    }

}