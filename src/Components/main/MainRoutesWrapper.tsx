import { Route, Routes } from "react-router-dom";
import StudentPagesWrapper from "../../Pages/main/Student/StudentPagesWrapper";
import TeacherPagesWrapper from "../../Pages/main/Teacher/TeacherPagesWrapper";

const MainRoutesWrapper = () => {

  return (
    <div className="flex-grow">
      <Routes>
        <Route path="student/*" element={<StudentPagesWrapper />} />
        <Route path="teacher/*" element={<TeacherPagesWrapper />} />
      </Routes>
    </div>
  );
};

export default MainRoutesWrapper;
