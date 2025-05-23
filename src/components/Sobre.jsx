export default function Sobre() {
  return (
    <main className="w-full md:max-w-[900px] m-auto flex flex-col md:flex-row gap-6 items-center justify-center">
      <div className="w-full p-4 md:max-w-[60%]">
        {/* <h2 className="text-4xl font-semibold my-4">Sobre mim</h2> */}
        <p className="text-justify text-xl">
          Olá, é um prazer te receber aqui! Me chamo Vinicius Dias e atuo no
          mercado da fotografia há mais de 6 anos. Desde sempre, tive a
          fotografia como uma forma de enxergar o mundo com mais sensibilidade e
          registrar momentos que merecem ser eternos. Afinal, a foto é a única
          recordação que pode durar pra toda a vida — e poder eternizar
          sentimentos, olhares e detalhes é o que me move. Hoje, trabalho com
          aquilo que mais me realiza: transformar emoções em lembranças. Atendo
          casamentos, ensaios de retrato, estúdio e eventos — sempre buscando
          capturar a essência de cada pessoa e de cada história.
        </p>
      </div>
      <div>
        <img
          className="rounded-md h-[400px]"
          src="foto.jpg"
          alt="fotoDoFotografo"
        />
      </div>
    </main>
  );
}
