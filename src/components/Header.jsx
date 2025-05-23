export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row p-4 gap-4 justify-evenly items-center">
      <div>
        <h1>
          <img className="w-[250px]" src="logo.png" alt="" />
        </h1>
      </div>
      <ul className="flex gap-4">
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
