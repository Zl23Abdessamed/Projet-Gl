const FAQSection = () => {
  return (
    <div className="bg-secondary-color flex-col w-full h-[470px] text-center items-center justify-between ">
      <h2 className="text-3xl font-poppins text-main-color pb-4 pt-10">
        Besoin de plus d’information ?
      </h2>
      <p className="text-[#333333] mb-12 text-xl tracking-wide">
        Nous avons les réponses à vos questions les plus fréquentes
      </p>
      <div className="pl-28 grid grid-cols-1 md:grid-cols-2 gap-7">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <button
              key={index}
              className="w-[492px] h-[63px] bg-gradient-to-r from-[#00728D] to-[#0099BD] text-white font-roboto py-2 px-4 rounded-2xl text-2xl font-medium text-left flex justify-between items-center"
            >
              Comment fonctionne le payment?
              <span className="text-main-color bg-secondary-color text-center text-2xl rounded-full w-8 h-8 font-bold">
                +
              </span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default FAQSection;
