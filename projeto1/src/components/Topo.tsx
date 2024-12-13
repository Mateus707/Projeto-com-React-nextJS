import Link from "next/link";


export default function Topo(){//componetes tem letra maiuscula
    return (
        <div className="flex justify-between items-center bg-zinc-400 h-[100px]">
            <div>CR7</div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-2xl ">Mateus</div>
              <div className="subTitle">Curso de React</div>
            </div>
              <nav className="flex flex-col">
                 <Link href={
                      {
                        pathname:"/produtos/produtos",
                        query:{nome:"Mateus",Curso:"React next"}
                      }
                  }>Produtos</Link>
                 <Link href={"/teste/teste"}>Teste</Link>
                 <Link href={"/"}>Home</Link>
              </nav>
        </div>
      );
}