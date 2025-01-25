import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import StudentsDisplayTable from "../../../Components/main/Teacher/StudentsDisplayTable";
import AddStudentModal from "../../../Components/main/Modals/AddStudentModal";

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
  "Tous",
];

const subjects = [
  "Mathématiques",
  "Physique",
  "Chimie",
  "Biologie",
  "Histoire",
  "Tous",
];

const Level = ["Primary", "Cem", "Lycee", "Tous"];

const initialStudents = [
  {
    id: "1",
    lastName: "Ahmed",
    firstName: "Drouhi",
    month: "Janvier",
    subject: "Mathématiques",
    level: "Primary",
    status: "Payé",
  },
  {
    id: "2",
    lastName: "Mounir",
    firstName: "Floubi",
    month: "Février",
    subject: "Physique",
    level: "Cem",
    status: "Non payé",
  },
  {
    id: "3",
    lastName: "Knhss",
    firstName: "Lamka",
    month: "Mars",
    subject: "Chimie",
    level: "Lycee",
    status: "Non payé",
  },
  {
    id: "4",
    lastName: "Sbnvh",
    firstName: "Cgshn",
    month: "Avril",
    subject: "Biologie",
    level: "Primary",
    status: "Payé",
  },
  {
    id: "5",
    lastName: "Ctreye",
    firstName: "Youo",
    month: "Mai",
    subject: "Histoire",
    level: "Cem",
    status: "Non payé",
  },
  {
    id: "6",
    lastName: "Bvcyt",
    firstName: "Lino",
    month: "Juin",
    subject: "Mathématiques",
    level: "Lycee",
    status: "Payé",
  },
  {
    id: "7",
    lastName: "Ait",
    firstName: "Salah",
    month: "Juillet",
    subject: "Physique",
    level: "Primary",
    status: "Non payé",
  },
  {
    id: "8",
    lastName: "Ben",
    firstName: "Omar",
    month: "Août",
    subject: "Chimie",
    level: "Cem",
    status: "Payé",
  },
  {
    id: "9",
    lastName: "Zidane",
    firstName: "Mehdi",
    month: "Septembre",
    subject: "Biologie",
    level: "Lycee",
    status: "Non payé",
  },
  {
    id: "10",
    lastName: "El",
    firstName: "Kheir",
    month: "Octobre",
    subject: "Histoire",
    level: "Primary",
    status: "Payé",
  },
];

const Dropdown = ({
  title,
  options,
  selected,
  setSelected,
}: {
  title: string;
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative bg-[#90CBD633] border border-ternary-color rounded-md px-4 py-2 w-72 cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <div className="absolute top-0 left-2 text-xs text-gray-700 font-medium">
          {title}
        </div>
        <span className="text-lg font-medium">{selected || title}</span>
        <MdKeyboardArrowDown
          className={`size-8 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border border-ternary-color rounded-md mt-2 z-10">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 text-sm hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TeacherPayments = () => {
  const [selectedMonth, setSelectedMonth] = useState("Tous");
  const [selectedSubject, setSelectedSubject] = useState("Tous");
  const [selectedLevel, setSelectedLevel] = useState("Tous");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [students, setStudents] = useState<any[]>(initialStudents);

  const filterStudents = () => {
    return students.filter((student) => {
      const matchesMonth =
        selectedMonth === "Tous" ||
        (student.month && student.month === selectedMonth);
      const matchesSubject =
        selectedSubject === "Tous" ||
        (student.subject && student.subject === selectedSubject);
      const matchesLevel =
        selectedLevel === "Tous" ||
        (student.level && student.level === selectedLevel);

      return matchesMonth && matchesSubject && matchesLevel;
    });
  };

  const filteredStudents = filterStudents();

  const handleAddStudent = async (newStudent: any) => {
    // Simulate adding a new student
    const updatedStudents = [
      ...students,
      { ...newStudent, id: String(students.length + 1) },
    ];
    setStudents(updatedStudents);
  };

  return (
    <MainPagesWrapper
      subTitle="Suivez vos groupes et validez leurs paiements"
      title="Gestion des Étudiants"
    >
      <div className="w-11/12 mx-auto flex items-center">
        <div className="w-1/2 flex flex-col items-start gap-4">
          <Dropdown
            title="Mois"
            options={months}
            selected={selectedMonth}
            setSelected={setSelectedMonth}
          />
          <Dropdown
            title="Niveau"
            options={Level}
            selected={selectedLevel}
            setSelected={setSelectedLevel}
          />
          <Dropdown
            title="Matières"
            options={subjects}
            selected={selectedSubject}
            setSelected={setSelectedSubject}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-y-8 justify-center items-center">
          <button
            className="px-6 py-2 ml-auto font-poppins text-base bg-main-color text-white rounded-sm hover:bg-dark"
            onClick={() => setIsAddModalOpen(true)}
          >
            Ajouter un nouveau étudiant
          </button>

          <StudentsDisplayTable students={filteredStudents} />
        </div>
      </div>

      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onApply={handleAddStudent}
      />
    </MainPagesWrapper>
  );
};

export default TeacherPayments;
