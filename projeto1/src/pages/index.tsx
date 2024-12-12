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




//função padrão home
export default function Home() {

  return (   
      <div>
           <Topo/> 
          <div style={style}>
            meio
          </div>
         <div className="flex justify-center gap-3">
            <Card produto={"Mouse"} valor={"R$ 40,00"}/>
            <Card produto={"Teclado"} valor={"R$ 120,00"}/>
            <Card produto={"Monitor"} valor={"R$ 469,99"}/>
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