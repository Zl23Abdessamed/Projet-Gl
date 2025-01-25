import Img from "../../assets/Qualification.png";

const TeacherQualification = () => {
  return (
    <div className="bg-gradient-to-r overflow-hidden relative from-[#DAEFEE] to-[#EEFAF6] w-full flex  items-center space-y-8">
      <div className="absolute top-[-380px] right-[-20px] h-[670px] w-[607px] bg-gradient-to-br from-[#015A71] to-[#0099BD] rounded-full"></div>
      <div className="flex-1 ml-10">
        <h2 className="text-3xl tracking-widest font-normal text-ternary-color mb-4">
          Enseignant qualifié et passionné ?
        </h2>
        <p className="text-[#333333E5] mb-4">
          Partagez vos compétences et inspirez les élèves
        </p>
        <ul className="list-none space-y-2 mb-8">
          <li className="flex items-center space-x-2">
            <span className="text-ternary-color text-shadow-lg text-3xl font-bold">
              &#10003;
            </span>
            <div className="flex flex-col pl-9 h-[50px]">
              <span className="text-xl text-ternary-color">Certifié</span>
              <span className="text-[#333333E5]">Un diplôme requis.</span>
            </div>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-ternary-color text-shadow-lg text-3xl font-bold">
              &#10003;
            </span>
            <div className="flex flex-col pl-9 h-[50px]">
              <span className="text-xl text-ternary-color">Expérimenté</span>
              <span className="text-[#333333E5]">
                5 ans d'enseignement minimum.
              </span>
            </div>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-ternary-color text-shadow-lg text-3xl font-bold">
              &#10003;
            </span>
            <div className="flex flex-col pl-9 h-[50px]">
              <span className="text-xl text-ternary-color">Engagé</span>
              <span className="text-[#333333E5]">
                Aider les étudiants à réussir.
              </span>
            </div>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-ternary-color text-shadow-lg text-3xl font-bold">
              &#10003;
            </span>
            <div className="flex flex-col pl-9 h-[50px]">
              <span className="text-xl text-ternary-color">Disponible</span>
              <span className="text-[#333333E5]">
                En présentiel ou en ligne.
              </span>
            </div>
          </li>
        </ul>
        <a
          href="#"
          className="bg-[#007A91] font-lora text-white text-xl tracking-widest ml-[520px] mb-4 px-6 py-2 rounded-xl "
        >
          JOIN US
        </a>
      </div>
      <div className="flex-1 z-10 pl-16 relative">
        <img src={Img} alt="Teacher promotion" />
        <div className="absolute top-[40px] right-[405px] flex text-center font-fredericka items-center justify-center text-white text-2xl font-bold">
          Construisez l’avenir
          <br />
          avec
          <br />
          Dz Teacher!
        </div>
      </div>
    </div>
  );
};

export default TeacherQualification;
