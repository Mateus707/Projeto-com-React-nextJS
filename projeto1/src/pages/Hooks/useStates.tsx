import { useState } from "react";
import DisplayState from "@/components/DisplayState";



 
export default function Usestate(){

const [contador,setContador] = useState<number>(0);

    function somar(){
        setContador(contador+1);
      }
       function subtrair(){
        setContador(contador-1);
      }
    return(
        <div>
            <DisplayState valor={contador} fuctionSomar={somar} fuctionSubtrair={subtrair}/>
        </div>
    )
}