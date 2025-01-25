import { Course } from "../../../Types/types";

const TeacherCourseDisplay = ({ course }: { course: Course }) => {
  const time = new Date(course.time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-52 p-4rounded-lg shadow-sm">
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
    </div>
  );
};

export default TeacherCourseDisplay;
