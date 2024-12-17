interface DisplayStateProps{
    valor:number,
    fuctionSomar:any,
    fuctionSubtrair:any, 
}

export default function DisplayState(props:DisplayStateProps){
    return(
        <div>
            <div>{props.valor}</div>
            <div className="flex justify-between items-center bg-zinc-400 h-[100px]">
                <button className="btnPadrao" onClick={props.fuctionSomar}>Soma</button>
                <button className="btnPadrao" onClick={props.fuctionSubtrair}>Subtrair</button>  
            </div>
        </div>
    )
}
