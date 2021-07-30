export class Resta{

    private res:number= 0;

    constructor(a:number,b:number){
        this.res = a - b;
    }

    public verResta(){
        return this.res
    }

}

export  class Suma{

    private result:number = 0;

    constructor(a:number,b:number){
        this.result = a + b;
    }

    public ver(){
        return this.result;
    }
}