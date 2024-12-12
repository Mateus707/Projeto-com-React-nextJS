// import Image from "next/image";
// import localFont from "next/font/local";
import Topo from "@/components/Topo";
import Card from "@/components/Card";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

function functionDesconto(valorProduto:number,descontoProduto:number){
  return valorProduto - descontoProduto;
}
function functionDescontoTaxado(valorProduto:number,descontoProduto:number){
  return valorProduto - (descontoProduto/2);
}


//função padrão home
export default function Home() {

  return (   
      <div>
           <Topo/> 
          <div style={style}>
            meio
          </div>
         <div className="flex justify-center gap-3">
            <Card produto={"Mouse"} valor={40.00} desconto={10} functionDesconto={functionDesconto}/>
            <Card produto={"Teclado"} valor={120.00} desconto={0} functionDesconto={functionDescontoTaxado}/>
            <Card produto={"Monitor"} valor={469.99} desconto={10} functionDesconto={functionDesconto}/>
            <Card produto={"CPU"} valor={699.99} desconto={10} functionDesconto={functionDescontoTaxado}/>
         </div>
      </div>
      
  );
}

const style = {
  display : "flex",
  justifyContent : "Center",
  alingItems : "Center",
  color : "#f00"
}