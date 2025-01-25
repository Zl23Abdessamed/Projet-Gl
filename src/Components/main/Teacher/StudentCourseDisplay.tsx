import { useState } from "react";
import { Course } from "../../../Types/types";
import DeleteModal from "../Modals/DeleteModal";
import AddCourseModal from "../Modals/AddCourseModal";

const StudentCourseDisplay = ({ course }: { course: Course }) => {
  const time = new Date(course.time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddCourse = (data: Course) => {
    console.log("New Course Added");
    console.log(data);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => setIsDeleteModalOpen(true);
  const handleCloseDelete = () => setIsDeleteModalOpen(false);

  const handleConfirmDelete = () => {
    console.log("Course deleted.");
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="w-52">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xl text-ternary-light-color">{time}</p>
          <span className="w-30 h-7 p-3 bg-ternary-light-color border border-ternary-color rounded-lg text-sm font-light text-center flex items-center justify-center">
            {course.type}
          </span>
        </div>
        <div className="text-xl text-ternary-semi-dark-color font-semibold">
          <p>Seance de {course.subject}</p>
          <p>{course.teacherName}</p>
        </div>
        {course.location && (
          <div className="flex items-center gap-1 mt-2">
            <span className="w-4 h-4 border border-ternary-color bg-transparent flex justify-center items-center rounded-full">
              <span className="w-2 h-2 bg-ternary-color rounded-full"></span>
            </span>
            <span className="text-ternary-color font-normal text-sm">
              {course.location}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center space-x-2 pt-4 pb-2">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-[#2097A7] text-white px-4 py-2 rounded-md hover:bg-[#27b7c9]"
          >
            Modifier
          </button>
          <button
            onClick={() => handleDelete()}
            className="bg-[#D43F41] text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Supprimer
          </button>
        </div>
      </div>

      <AddCourseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onApply={handleAddCourse}
      />

      <DeleteModal
        type="course"
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default StudentCourseDisplay;
