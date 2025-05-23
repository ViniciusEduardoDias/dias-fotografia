import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./styles/carrossel.css";

const Carrossel = () => {
  const fotos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dflrn4ned/image/upload/v1747965480/91_sbfqsy.jpg",
      alt: "Ensaio Externo",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dflrn4ned/image/upload/v1747965478/71_ycmlbj.jpg",
      alt: "Ensaio Externo",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dflrn4ned/image/upload/v1747965429/315_bvyfwf.jpg",
      alt: "Ensaio Externo",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dflrn4ned/image/upload/v1747965431/399_dgv8zm.jpg",
      alt: "Ensaio Externo",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dflrn4ned/image/upload/v1747961777/P05_vvj7ci.jpg",
      alt: "Ensaio Externo",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="py-12 px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {fotos.map((foto) => (
            <div key={foto.id}>
              <img
                src={foto.url}
                alt={foto.alt}
                className="w-full h-[500px] rounded-2xl shadow object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carrossel;
