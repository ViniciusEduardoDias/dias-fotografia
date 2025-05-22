export default function Sobre() {
  return (
    <main className="flex flex-col md:flex-row gap-6 items-center justify-center">
      <div className="max-w-[60%]">
        <h2 className="text-4xl font-semibold">Sobre mim</h2>
        <p className="text-justify text-xl">
          Prazer, sou Vinicius Dias! Fotógrafo apaixonado por contar histórias
          através de imagens. Desde sempre, tive a fotografia como uma forma de
          enxergar o mundo com mais sensibilidade e registrar momentos que
          merecem ser eternos. Afinal, a foto é a única recordação que pode
          durar pra toda a vida — e poder eternizar sentimentos, olhares e
          detalhes é o que me move. Hoje, trabalho com aquilo que mais me
          realiza: transformar emoções em lembranças. Atendo casamentos, ensaios
          de retrato, estúdio e eventos — sempre buscando capturar a essência de
          cada pessoa e de cada história.
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
