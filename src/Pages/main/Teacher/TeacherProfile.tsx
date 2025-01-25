import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import TeacherCard from "../../../Components/main/Teacher/TeacherCard";
import { CourseType, Level, SubjectNames } from "../../../Types/constants";

var teacher = {
  name: "Alice Johnson",
  level: [Level.primary, Level.cem],
  location: "Alger",
  subject: [SubjectNames.math, SubjectNames.phys],
  experience: "5 years",
  diploma: "Master's in Education",
  available: CourseType.online,
  tarifs: ["2000 DZD/hour"],
  contacts: {
    phone: "555-123-4567",
    email: "alice.johnson@example.com",
  },
  imageUrl: "https://via.placeholder.com/150",
};

const TeacherProfile = () => {
  return (
    <MainPagesWrapper subTitle="" title="Mes Informations pour le Publique">
      <div className="flex flex-col space-y-14">
        <div className="flex justify-center ">
          <TeacherCard teacher={teacher}></TeacherCard>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div className=" p-8 w-full font-poppins max-w-4xl">
            <h2 className="text-[33px] pb-10 font-medium text-main-color mb-6">
              Pour entrer les informations :
            </h2>
            <div className="flex space-x-20">
              <div className="flex-1">
                <form className="grid grid-cols-1 gap-6">
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Nom :
                    </label>
                    <input
                      type="text"
                      placeholder="Nom ...."
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Prénom :
                    </label>
                    <input
                      type="text"
                      placeholder="Prenom ...."
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Niveaux :
                    </label>
                    <select className=" h-[40px] w-[220px] px-4 py-2 border rounded-lg bg-secondary-color font-light text-[#002027CC] flex-1  border-gray-300  p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]">
                      <option value="">Niveau...</option>
                      <option value="primaire">Primaire</option>
                      <option value="secondaire">Secondaire</option>
                      <option value="supérieur">Supérieur</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Matière :
                    </label>
                    <input
                      type="text"
                      placeholder="matières"
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Expériences :
                    </label>
                    <textarea
                      placeholder="experiences ...."
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Téléphone :
                    </label>
                    <input
                      type="text"
                      placeholder="telph......"
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Gmail :
                    </label>
                    <input
                      type="email"
                      placeholder="gmail...."
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    />
                  </div>
                </form>
              </div>
              <div className="w-px bg-main-color"></div>
              <div className="flex-1">
                <form className="grid grid-cols-1 gap-6">
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Diplômes :
                    </label>
                    <input
                      type="text"
                      placeholder="Diplômes ...."
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Disponibilité :
                    </label>
                    <input
                      type="text"
                      placeholder="disp...."
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Localisation :
                    </label>
                    <input
                      type="text"
                      placeholder="localis...."
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Tarifs :
                    </label>
                    <input
                      type="text"
                      placeholder="tarifs ...."
                      className="font-light bg-secondary-color text-[#002027CC] flex-1 border border-gray-300 rounded-lg w-[160px] p-2 focus:outline-none focus:ring-1 focus:ring-main-color ring-1 ring-[#3b8ca0]"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-[#002027] text-lg font-normal mr-4">
                      Votre CV :
                    </label>
                    <div className="flex-1">
                      <input
                        type="file"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-main-color hover:file:bg-ternary-light-color"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      type="submit"
                      className="bg-main-color text-white px-6 py-2 rounded-lg hover:bg-dark focus:ring-2 focus:ring-main-color focus:outline-none"
                    >
                      Appliquer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainPagesWrapper>
  );
};

export default TeacherProfile;
