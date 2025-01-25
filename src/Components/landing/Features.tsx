import icon1 from "../../assets/Icon1.png";
import icon2 from "../../assets/Icon2.png";
import icon3 from "../../assets/Icon3.png";
import icon4 from "../../assets/Icon4.png";
import image from "../../assets/image.png";

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#a5dbdd73] to-secondary-color py-10 pt-16 h-[650px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 flex items-center justify-center">
            <img src={image} alt="Learning Environment" className="w-[450px]" />
          </div>
          <div className="md:w-1/2 md:mt-0 md:pl-8">
            <h2 className="text-4xl font-poppins text-[#005A71]">
              Apprenez mieux avec nous
            </h2>
            <p className="mt-2 text-lg w-[560px] font-poppins text-[#333333]">
              Élevez votre potentiel grâce à notre engagement pour votre
              réussite académique.
            </p>
            <ul className="mt-10 space-y-10">
              <li className="flex items-start">
                <div className="mr-4">
                  <img
                    src={icon1}
                    alt="Quality Teachers"
                    className="w-12 h-12 mt-1 mr-4"
                  />
                </div>
                <div>
                  <p className="text-[#004656] text-2xl font-poppins">
                    Profs de haute qualité
                  </p>
                  <p className="text-[#333333] text-lg font-roboto leading-relaxed">
                    Certifiés, expérimentés, et reconnus
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4">
                  <img
                    src={icon2}
                    alt="Accessible Support"
                    className="w-12 h-12 mt-2 mr-4"
                  />
                </div>
                <div>
                  <p className="text-[#004656] text-2xl font-poppins">
                    Partout pour tous
                  </p>
                  <p className="text-[#333333] text-lg font-roboto leading-relaxed">
                    Un soutien scolaire accessible dans chaque région
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4">
                  <img
                    src={icon3}
                    alt="Security"
                    className="w-12 h-12 mt-2 mr-4"
                  />
                </div>
                <div>
                  <p className="text-[#004656] text-2xl font-poppins">
                    Confiance et sécurité
                  </p>
                  <p className="text-[#333333] text-lg font-roboto leading-relaxed">
                    Paiements sécurisés et gestion simplifiée
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4">
                  <img
                    src={icon4}
                    alt="Guaranteed Support"
                    className="w-12 h-12 mt-2 mr-4"
                  />
                </div>
                <div>
                  <p className="text-[#004656] text-2xl font-poppins">
                    Suivi garanti
                  </p>
                  <p className="text-[#333333] text-lg font-roboto leading-relaxed">
                    Accompagnement pédagogique jusqu'à la réussite
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
