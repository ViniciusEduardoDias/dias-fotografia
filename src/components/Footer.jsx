import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
      <section
        id="contact"
        className="my-8 md:my-0 flex flex-col items-center justify-center gap-10 p-6"
      >
        <h2 className="text-3xl font-semibold text-gray-100">
          Entre em Contato
        </h2>
        <div className="flex gap-6">
          <a
            href="https://wa.me/5519982467708"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-700 text-white text-xl hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/viniciusdiasfotografia/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-800 text-white text-xl hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:viniciusdiasfotografia@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500 hover:bg-gray-700 text-white text-xl hover:scale-110 transition"
          >
            <HiOutlineMail />
          </a>
        </div>
      </section>
      {/* Copyright */}
      <div className="text-center text-gray-300 text-sm mt-6">
        © 2025 ViniciusDiasFotografia. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
