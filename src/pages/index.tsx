import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>New Code</title>
        <meta name="description" content="Desenvolvimento de sites profissionais." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section style={{padding: '0 20px'}}>
        <h1>New Code</h1>
        <div>
          <Link href="">
          Inicio
          </Link>
          <Link href="">
          Serviços
          </Link>   
          <Link href="">
          Saiba Mais
          </Link> 
          <Link href="">
          Solicitar proposta
          </Link>
        </div>
        <div>
          <div>
            <h2>Desenvolvimento de sites profissionais.</h2>
          </div>
          <div>
            <p>Sem blah blah blah técnico! </p>
            <p>  Nós queremos te entregar resultados consistentes aumentando a produtividade do seu negócio </p>
          <p>através de uma consultoria de software que supere suas expectativas.</p> 
          </div>
        </div>
      </section>
    </>
  )
}
