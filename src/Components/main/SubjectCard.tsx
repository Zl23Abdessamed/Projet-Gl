import { SubjectNames } from "../../Types/constants";
import { Subjects } from "../../Types/types";

const SubjectCard = ({ props }: { props: Subjects }) => {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <button
        className="w-40 h-12 border-2 border-ternary-color rounded-xl text-lg 
        font-poppins text-ternary-color transition-all duration-300
        hover:bg-ternary-color hover:text-white focus:outline-none
        focus:ring-2 focus:ring-ternary-color focus:ring-offset-2"
      >
        {SubjectNames[props.name]}
      </button>
      <div className="bg-ternary-extra-light-color text-white rounded-xl px-3 py-1">
        <p className="text-sm font-medium">Coeff : {props.coeff}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
