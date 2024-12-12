export default function Card(props:any){
    return(//passando valores via props
        <div className="flex flex-col border border-red-600 rounded-lg p-2 ">
            <div>{props.produto}</div>
            <div>{props.valor}</div>
        </div>
    )
}