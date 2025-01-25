import { Route, Routes } from 'react-router-dom'
import Courses from './Courses'
import Documents from './Documents'
import SingleTeacherDocuments from './SingleTeacherDocuments'
import StudentPayments from './StudentPayments'

const StudentPagesWrapper = () => {
    return (
        <Routes>
            <Route path="documents" element={<Documents />} />
            <Route path="documents/:id" element={<SingleTeacherDocuments />} />
            <Route path="payments" element={<StudentPayments />} />
            <Route path="courses" element={<Courses />} />
        </Routes>
    )
};

export default StudentPagesWrapper