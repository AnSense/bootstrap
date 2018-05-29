import {Application} from "./Application";
import {MxButton} from "./MxButton";

export class Test {
    public test(target:any):void{

        let o:any=Application.getJQueryObject((target as MxButton).getID());
        o.button("dispose");
       console.log(this,target);
    }
}