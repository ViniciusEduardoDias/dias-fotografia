export default function Header() {
  return (
    <header className="flex p-4 justify-evenly items-center">
      <div>
        <h1>
          <img className="w-[250px]" src="logo.png" alt="" />
        </h1>
      </div>
      <ul className="flex gap-4">
        <li className="text-xl hover:text-gray-600 cursor-pointer">
          <a href="#about">Sobre</a>
        </li>
        <li className="text-xl hover:text-gray-600 cursor-pointer">
          <a href="#services">Serviços</a>
        </li>
        <li className="text-xl hover:text-gray-600 cursor-pointer">
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </header>
  );
}
