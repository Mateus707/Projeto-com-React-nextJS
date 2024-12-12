interface CardProps{
    produto:string,
    valor:number,
    desconto:number,
    functionDesconto:any
    
}



export default function Card(props:CardProps){
    return(//passando valores via props
        <div className="flex flex-col border border-red-600 rounded-lg p-2 ">
            <div>Produto : {props.produto}</div>
            <div>Valor : R${props.valor}</div>
            <div>Desconto : {props.desconto}</div>
            <div>Valor com Desconto : {props.functionDesconto(props.valor,props.desconto)}</div>
        </div>
    )
}