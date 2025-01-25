import { useState } from "react";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import TeacherCoursesCalendar from "../../../Components/main/Teacher/TeacherCoursesCalendar";
import { CourseType } from "../../../Types/constants";
import { Course } from "../../../Types/types";
import AddCourseModal from "../../../Components/main/Modals/AddCourseModal";

const TeacherCourses = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddStudent = (data: Course) => {
    console.log("New Course Added");
    console.log(data);
  };

  const fixedCourseData: Course[] = [
    {
      id: "C001",
      type: CourseType.local,
      teacherId: "T001",
      teacherName: "John Doe",
      location: "Room 101",
      time: new Date(),
      subject: "Mathematics",
    },
    {
      id: "C002",
      type: CourseType.online,
      teacherId: "T002",
      teacherName: "Jane Smith",
      location: "Room 202",
      time: new Date(new Date().setDate(new Date().getDate() + 2)),
      subject: "Physics",
    },
    {
      id: "C003",
      type: CourseType.online,
      teacherId: "T003",
      teacherName: "Emily Johnson",
      location: "Lab 1",
      time: new Date(new Date().setDate(new Date().getDate() + 4)),
      subject: "Chemistry",
    },
    {
      id: "C004",
      type: CourseType.local,
      teacherId: "T004",
      teacherName: "Michael Brown",
      location: "Room 303",
      time: new Date(new Date().setHours(new Date().getHours() + 1)),
      subject: "Biology",
    },
    {
      id: "C005",
      type: CourseType.online,
      teacherId: "T005",
      teacherName: "Sarah Davis",
      time: new Date(new Date().setHours(new Date().getHours() + 4)),
      subject: "Computer Science",
    },
  ];

  return (
    <MainPagesWrapper subTitle="" title="Tableau de Bord des Séances">
      <div className="w-11/12 mx-auto flex flex-col">
        <button
          className="px-6 py-2 ml-auto font-poppins text-base bg-main-color text-white rounded-sm hover:bg-dark"
          onClick={() => setIsAddModalOpen(true)}
        >
          Ajouter un nouveau évènement
        </button>
        <TeacherCoursesCalendar courses={fixedCourseData} />
      </div>

      <AddCourseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onApply={handleAddStudent}
      />
    </MainPagesWrapper>
  );
};

export default TeacherCourses;
