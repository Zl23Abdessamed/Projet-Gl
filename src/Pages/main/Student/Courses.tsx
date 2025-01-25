import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import StudentCoursesCalendar from "../../../Components/main/StudentCoursesCalendar";
import { Course } from "../../../Types/types";
import { getStudentCourses } from "../../../utils/fetchfuncs";
import { CourseType } from "../../../Types/constants";

const Courses = () => {
  const [cookies] = useCookies(['token']);
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [loading, setLoading] = useState(true);

  // Fake data to be used in case of an error
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
      time: "2024-01-01T11:00:00",
      subject: "Physics",
    },
    {
      id: "C003",
      type: CourseType.online,
      teacherId: "T003",
      teacherName: "Emily Johnson",
      location: "Lab 1",
      time: "2024-01-01T13:00:00",
      subject: "Chemistry",
    },
    {
      id: "C004",
      type: CourseType.local,
      teacherId: "T004",
      teacherName: "Michael Brown",
      location: "Room 303",
      time: "2024-01-01T15:30:00",
      subject: "Biology",
    },
    {
      id: "C005",
      type: CourseType.online,
      teacherId: "T005",
      teacherName: "Sarah Davis",
      time: "2024-01-01T00:00:00",
      subject: "Computer Science",
    },
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getStudentCourses(cookies.token);
        setCourses(data);
      } catch {
        // In case of any error, fallback to the fake data
        setCourses(fixedCourseData);
      } finally {
        setLoading(false);
      }
    };

    if (cookies.token) {
      fetchCourses();
    } else {
      // Fallback to the fake data if no token is found
      setCourses(fixedCourseData);
      setLoading(false);
    }
  }, [cookies.token]);

  return (
    <MainPagesWrapper subTitle="" title="Tableau de Bord des Séances">
      <div className="w-11/12 mx-auto">
        {loading ? (
          <p>Loading...</p>
        ) : courses ? (
          <StudentCoursesCalendar courses={courses} />
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </MainPagesWrapper>
  );
};

export default Courses;
