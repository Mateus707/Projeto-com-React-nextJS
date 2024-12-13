import Card from "@/components/Card";
import Topo from "@/components/Topo"
import { useRouter } from "next/router";
function functionDesconto(valorProduto:number,descontoProduto:number){
    return valorProduto - descontoProduto;
  }
  function functionDescontoTaxado(valorProduto:number,descontoProduto:number){
    return valorProduto - (descontoProduto/2);
  } 
  
const produtos = [
    {
      id:1,
      produto:"Mouse",
      valor:40.00,
      desconto:5,
      disponivel:true
    },
    {
      id:2,
      produto:"Teclado",
      valor:120.00,
      desconto:10,
      disponivel:true
    },
    {
      id:3,
      produto:"Monitor",
      valor:469.99,
      desconto:30,
      disponivel:true
    },
    {
      id:4,
      produto:"Cx.Som",
      valor:209.99,
      desconto:29.99,
      disponivel:true
    }
  ];


export default function produtosPagina(){
  const router = useRouter(); 
  // const params = router.query;
  // const nome =  router.query.nome;
  // const curso =  router.query.Curso;
  // console.log(params);
  // console.log(nome);
  // console.log(curso);
  // ou

  const {nome,Curso} = router.query;
  console.log(nome);
  console.log(Curso);
    return (
     <div>
      <Topo/>
        <div className="flex justify-center gap-3">
         {produtos.map((e:any)=>{
                if(e.disponivel){
                  return (
                  <Card key={e.id} produto={e.produto} valor={e.valor} desconto={e.desconto} functionDesconto={functionDesconto}>
                    Teste Children
                  </Card>
                  );
                }
            }
            )}
         </div>
     </div> 
    )
}