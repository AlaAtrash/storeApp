import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CommentBlockService {
    private i:number=0;
    private j:number=0;

    increase() {
        this.i++;
        this.j++;
    }

    geti():number {
        return this.i
    }

    getj():number {
        return this.j
    }

    getAddition():number {
        return this.i + this.j
    }




}