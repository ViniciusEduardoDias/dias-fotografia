export default function Header() {
  return (
    <header className="flex p-4 justify-evenly items-center">
      <div>
        <h1>
          <img className="w-[250px]" src="logo.png" alt="" />
        </h1>
      </div>
      <ul className="flex gap-4">
        <li className="text-xl hover:text-gray-600 cursor-pointer">Sobre</li>
        <li className="text-xl hover:text-gray-600 cursor-pointer">Contato</li>
        <li className="text-xl hover:text-gray-600 cursor-pointer">Serviços</li>
      </ul>
    </header>
  );
}
