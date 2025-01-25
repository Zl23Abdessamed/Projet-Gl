import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import TeacherCoursesCalendar from "../../../Components/main/Teacher/TeacherCoursesCalendar";
import { Course } from "../../../Types/types";
import AddCourseModal from "../../../Components/main/Modals/AddCourseModal";
import { getTeacherCourses, addTeacherCourse } from "../../../utils/fetchfuncs"; // Assume these exist

const TeacherCourses = () => {
  const [cookies] = useCookies(["token"]);
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (!cookies.token) {
          setError("Authentication required");
          setLoading(false);
          return;
        }

        const data = await getTeacherCourses(cookies.token);
        setCourses(data);
      } catch (err) {
        setError("Failed to fetch courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [cookies.token]);

  const handleAddCourse = async (newCourse: Course) => {
    try {
      if (!cookies.token) {
        setError("Authentication required");
        return;
      }

      // Post new course to API
      await addTeacherCourse(cookies.token, newCourse);

      // Refresh course list
      const updatedCourses = await getTeacherCourses(cookies.token);
      setCourses(updatedCourses);
    } catch (err) {
      console.error("Failed to add course:", err);
      setError("Failed to add new course");
    }
  };

  return (
    <MainPagesWrapper subTitle="" title="Tableau de Bord des Séances">
      <div className="w-11/12 mx-auto flex flex-col">
        <button
          className="px-6 py-2 ml-auto font-poppins text-base bg-main-color text-white rounded-sm hover:bg-dark"
          onClick={() => setIsAddModalOpen(true)}
        >
          Ajouter un nouveau évènement
        </button>

        {loading ? (
          <p>Chargement des séances...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : courses ? (
          <TeacherCoursesCalendar courses={courses} />
        ) : (
          <p>Aucune séance planifiée</p>
        )}
      </div>

      <AddCourseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onApply={handleAddCourse}
      />
    </MainPagesWrapper>
  );
};

export default TeacherCourses;
