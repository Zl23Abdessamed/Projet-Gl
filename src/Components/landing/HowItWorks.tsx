const HowItWorksSection = () => {
  return (
    <section className="bg-secondary-color py-10 h-[530px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-poppins text-main-color mb-12 mt-20">
          Comment ça marche ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex w-max pl-[152px]">
              <div className=" text-white text-center leading-[50px] rounded-full w-[60px] h-[60px] bg-[#0099BD] text-4xl  mb-2 font-semibold">
                1
              </div>
              <p className=" leading-[30px] tracking-[-0.04rem] bg-gradient-to-r from-[#0099BD] to-[#00728D] text-[42px] pl-[24px] bg-clip-text text-transparent">
                ................................
              </p>
            </div>
            <h3 className="font-poppins text-[27px] text-[#0099BD]">
              Recherche
            </h3>
            <p className="text-[#333333] mt-2 text-lg font-roboto w-[225px] ml-[65px] tracking-wide mb-20">
              Utilisez notre moteur de recherche pour trouver un enseignant
              selon vos besoins
            </p>
          </div>
          <div className="text-center">
            <div className="flex w-max pl-[152px]">
              <div className=" text-white text-center leading-[50px] rounded-full w-[60px] h-[60px] bg-[#00728D] text-4xl mb-2 font-semibold">
                2
              </div>
              <p className="leading-[30px] tracking-[-0.04rem] bg-gradient-to-r from-[#00728D] to-[#005A71] text-[42px] pl-[24px] bg-clip-text text-transparent">
                ................................
              </p>
            </div>
            <h3 className="font-poppins text-[27px] text-[#00728D]">
              Consultation
            </h3>
            <p className="text-[#333333] mt-2 text-lg font-roboto w-[225px] ml-[65px] tracking-wide mb-20">
              Accédez à des profils détaillés : diplômes, expériences,
              disponibilités et avis d'autres étudiants.
            </p>
          </div>
          <div className="text-center">
            <div className="flex w-max pl-[152px]">
              <div className=" text-white text-center leading-[50px] rounded-full w-[60px] h-[60px] bg-[#005A71] text-4xl mb-2 font-semibold">
                3
              </div>
              <p className="leading-[30px] tracking-[-0.04rem] bg-gradient-to-r from-[#005A71] to-[#004656] text-[42px] pl-[24px]  bg-clip-text text-transparent">
                ................................
              </p>
            </div>
            <h3 className="font-poppins text-[27px] text-[#005A71]">Contact</h3>
            <p className="text-[#333333] mt-2 text-lg font-roboto w-[225px] ml-[65px] tracking-wide mb-20">
              Contactez directement l'enseignant pour discuter des besoins
              spécifiques, horaires et modalités
            </p>
          </div>
          <div className="text-center">
            <div className="flex w-max pl-[150px]">
              <div className=" text-white text-center leading-[50px] rounded-full  w-[60px] h-[60px] bg-[#004656] text-4xl mb-2 font-semibold">
                4
              </div>
            </div>
            <h3 className="font-poppins text-[27px] text-[#004656]">Suivi</h3>
            <p className="text-[#333333] mt-2 text-lg font-roboto w-[225px] ml-[65px] tracking-wide mb-20">
              Participez aux cours en toute sérénité grâce à notre plateforme
              sécurisée et suivez vos progrès.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
