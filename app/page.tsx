// filepath: c:\Users\Xen0m\Desktop\NextjsPOrfoin\primerdespliegue\app\page.tsx
import Head from "next/head";
import Main from "./componentes/Main";
import Header from "./componentes/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soluciones Web en Monterrey</title>
        <meta name="description" content="Ofrecemos soluciones web y software a medida para empresas en Monterrey. Locales, seguros y confiables." />
        <meta name="keywords" content="soluciones web Monterrey, desarrollo de software Monterrey, páginas web" />
      </Head>
      <Header />
      <Main />
    </>
  );
}