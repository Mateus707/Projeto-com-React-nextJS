import Card from "@/components/Card";
import Topo from "@/components/Topo"
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


export default function produtosPagina(){
    return (
     <div>
      <Topo/>
        <div className="flex justify-center gap-3">
         {produtos.map((e:any)=>{
                if(e.disponivel){
                  return (
                    <Card produto={e.produto} valor={e.valor} desconto={e.desconto} functionDesconto={functionDesconto}/>
                  );
                }
            }
            )};
         </div>
     </div> 
    )
}