import { Directive,ElementRef,Input,HostListener } from "@angular/core";

@Directive({
    selector:'[card]'
})
export class CardDerective{
    @HostListener('blur') onBlur(){
        this.el.nativeElement.value="1234-1234-1234-1234";
       
    }
    @Input() card:string;
    constructor(private el:ElementRef){
       
    }

}