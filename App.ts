async function Test(operacion:string){
 
            switch(operacion){
                case "sumar":
                    let {Suma} = await import('./operaciones');
                    let sumar = new Suma(4,5);
                      console.log(sumar.ver());
                     break;
                case "restar":
                    let {Resta} = await import ('./operaciones');
                    let restar = new Resta(8,5);
                     console.log(restar.verResta());
                    break;
                }      
}

Test("sumar");
Test("restar");

