

declare var $: any;

export class Application {
    private static ElementID: number = 0;
    public static createElement(tagName:string,className:string):HTMLElement{
        Application.ElementID++;
        let ele:HTMLElement=document.createElement(tagName);
        ele.className=className;
        ele.id="ElementID_"+Application.ElementID.toString();
        return ele;
    }
    public static addEventListener($this: any,id:string, event: string, listener: Function) {
        $(document).on(event, "#" +id, function (e) {
            e.stopPropagation();
            listener.call($this);
        });
    }
    public static getJQueryObject(id:string) {
        return $("#"+id);

    }

}

