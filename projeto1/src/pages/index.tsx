// import Image from "next/image";
// import localFont from "next/font/local";

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
const nome = "mateus";
const idade = 18;

const Topo = () => //componetes tem letra maiuscula
{
  return (
    <div className="flex justify-between">
        <div>CR7</div>
        <div>{nome}</div>
        <div>{idade}</div>
    </div>
  );
}

//função padrão home
export default function Home() {

  return (   
      <div>
          <Topo/>
      </div>
      
  );
}
