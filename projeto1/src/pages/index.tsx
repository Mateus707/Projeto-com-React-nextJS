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

const produtos = [
  {
    produto:"Mouse",
    valor:40.00,
    desconto:5,
    disponivel:true
  },
  {
    produto:"Teclado",
    valor:120.00,
    desconto:10,
    disponivel:true
  },
  {
    produto:"Monitor",
    valor:469.99,
    desconto:30,
    disponivel:true
  },
  {
    produto:"Cx.Som",
    valor:209.99,
    desconto:29.99,
    disponivel:true
  }
]; 
//função padrão home
export default function Home() {

  return (   
      <div>
           <Topo/> 
          <div style={style}>
            meio
          </div>
         <div className="flex justify-center gap-3">
         {produtos.map((e:any)=>{
                if(e.disponivel){
                  return (
                    <Card produto={e.produto} valor={e.valor} desconto={e.desconto} functionDesconto={functionDesconto}/>
                  );
                }
            })}
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