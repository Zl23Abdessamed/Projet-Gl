import { Route, Routes } from "react-router-dom"
import TeacherCourses from "./TeacherCourses"
import TeacherDocuments from "./TeacherDocuments"
import TeacherPayments from "./TeacherPayments"
import TeacherProfile from "./TeacherProfile"

const TeacherPagesWrapper = () => {
    return (
        <Routes>
            <Route path="documents" element={<TeacherDocuments />} />
            <Route path="payments" element={<TeacherPayments />} />
            <Route path="courses" element={<TeacherCourses />} />
            <Route path="profile" element={<TeacherProfile />} />
        </Routes>
    )
}

export default TeacherPagesWrapper