import { useState } from "react";





export default function Usestate(){
    const [contador,setContador] = useState<number>(0);
     function sum(contador:number){
        return setContador(contador+1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={()=>sum(contador)}>Soma</button>
        </div>
    )
}