import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { MdKeyboardArrowDown } from "react-icons/md";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import { StudentPayment } from "../../../Types/types";
import StudentsPaymentsDisplayTable from "../../../Components/main/Student/StudentsPaymentsDisplayTable";
import { getStudentPayments } from "../../../utils/fetchfuncs";
import { PaymentStatus } from "../../../Types/constants";

const months = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre", "Tous"
];

const subjects = [
  "Mathématiques", "Physique", "Chimie", "Biologie", "Histoire", "Tous"
];

const teachers = [
  { id: "1", teacherName: "Mme Dupont" },
  { id: "2", teacherName: "M. Durand" },
  { id: "3", teacherName: "Mme Lefevre" },
  { id: "4", teacherName: "M. Bernard" },
  { id: "5", teacherName: "Tous" }
];

const mockPayments: StudentPayment[] = [
  {
    id: "1",
    month: "Janvier",
    subject: "Mathématiques",
    teacherId: "1",
    teacherName: "Mme Dupont",
    paymentStatus: PaymentStatus.Payed
  },
  {
    id: "2",
    month: "Février", 
    subject: "Physique",
    teacherId: "2",
    teacherName: "M. Durand",
    paymentStatus: PaymentStatus.pending
  },
  {
    id: "3",
    month: "Mars",
    subject: "Chimie", 
    teacherId: "3",
    teacherName: "Mme Lefevre",
    paymentStatus: PaymentStatus.Payed
  }
];

export const Dropdown = ({
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
          className={`size-8 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
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

const StudentPayments = () => {
  const [cookies] = useCookies(['token']);
  const [selectedMonth, setSelectedMonth] = useState("Tous");
  const [selectedSubject, setSelectedSubject] = useState("Tous");
  const [selectedTeacher, setSelectedTeacher] = useState("Tous");
  const [payments, setPayments] = useState<StudentPayment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await getStudentPayments(cookies.token);
        setPayments(data);
      } catch (err) {
        setPayments(mockPayments);
      } finally {
        setLoading(false);
      }
    };

    if (cookies.token) {
      fetchPayments();
    } else {
      setPayments(mockPayments);
      setLoading(false);
    }
  }, [cookies.token]);

  const filteredPayments = payments.filter((payment) => {
    const monthMatch =
      selectedMonth === "Tous" || payment.month === selectedMonth;
    const subjectMatch =
      selectedSubject === "Tous" || payment.subject === selectedSubject;
    const teacherMatch =
      selectedTeacher === "Tous" || payment.teacherName === selectedTeacher;
    return monthMatch && subjectMatch && teacherMatch;
  });

  return (
    <MainPagesWrapper
      subTitle="Visualisez et gérez vos paiements par matière et enseignant"
      title="Suivi des Paiements"
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
            title="Matières"
            options={subjects}
            selected={selectedSubject}
            setSelected={setSelectedSubject}
          />
          <Dropdown
            title="Enseignants"
            options={teachers.map((teacher) => teacher.teacherName)}
            selected={selectedTeacher}
            setSelected={setSelectedTeacher}
          />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          {loading ? (
            <p>Chargement...</p>
          ) : (
            <StudentsPaymentsDisplayTable payments={filteredPayments} />
          )}
        </div>
      </div>
    </MainPagesWrapper>
  );
};

export default StudentPayments;