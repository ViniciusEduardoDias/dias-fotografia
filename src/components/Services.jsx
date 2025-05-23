import {
  FaCameraRetro,
  FaBirthdayCake,
  FaFutbol,
  FaHeart,
  FaUsers,
} from "react-icons/fa";

const Services = () => {
  const servicos = [
    {
      id: 1,
      nome: "Ensaios Externos",
      descricao: "Registre momentos incríveis em cenários naturais ou urbanos.",
      icone: <FaCameraRetro size={40} />,
    },
    {
      id: 2,
      nome: "Fotografia de Eventos",
      descricao: "Cobertura fotográfica completa para o seu evento.",
      icone: <FaUsers size={40} />,
    },
    {
      id: 3,
      nome: "Esportes",
      descricao: "Capture a emoção e energia das suas competições.",
      icone: <FaFutbol size={40} />,
    },
    {
      id: 4,
      nome: "Casamentos",
      descricao: "Momentos únicos e emocionantes registrados para sempre.",
      icone: <FaHeart size={40} />,
    },
    {
      id: 5,
      nome: "Aniversários",
      descricao:
        "Fotos espontâneas e divertidas para comemorar a vida. Eternize cada ano, cada jornada.",
      icone: <FaBirthdayCake size={40} />,
    },
  ];

  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Meus Serviços</h2>
        <p className="text-gray-600 mb-12">
          Escolha o tipo de ensaio ou evento para conferir um pouco do meu
          trabalho e vamos eternizar seus momentos!
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition"
            >
              <div className="text-primary mb-4 flex justify-center">
                {servico.icone}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{servico.nome}</h3>
              <p className="text-gray-600 mb-4">{servico.descricao}</p>
              <a
                href="#contato"
                className="inline-block mt-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
