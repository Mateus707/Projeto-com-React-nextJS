import { useState } from "react";
import DisplayState from "@/components/DisplayState";




export default function Usestate(){
    const [contador,setContador] = useState<number>(0);
      function somar(contador:number){
        setContador(contador+1);
    }
      function subtrair(contador:number){
        setContador(contador-1);
    }
    return(
        <div>
            <DisplayState valor={contador}/>
            <div className="flex justify-between items-center bg-zinc-400 h-[100px]">
                <button className="btnPadrao" onClick={()=>somar(contador)}>Soma</button>
                <button className="btnPadrao" onClick={()=>subtrair(contador)}>Subtrair</button>  
            </div>
        </div>
    )
}