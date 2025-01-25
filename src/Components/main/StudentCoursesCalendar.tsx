import React, { useState } from "react";
import { Course } from "../../Types/types";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import TeacherCourseDisplay from "./Student/TeacherCourseDisplay";

interface StudentCoursesCalendarProps {
  courses: Course[];
}

const getCoursesByDate = (courses: Course[]) => {
  const groupedCourses: Record<string, Course[]> = {};
  courses.forEach((course) => {
    const date = new Date(course.time).toLocaleDateString("fr-CA");
    if (!groupedCourses[date]) {
      groupedCourses[date] = [];
    }
    groupedCourses[date].push(course);
  });
  return groupedCourses;
};

const getWeekDates = (date: Date) => {
  const sunday = new Date(date);
  sunday.setDate(date.getDate() - date.getDay()); // Start of the week (Sunday)
  const week = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(sunday);
    day.setDate(sunday.getDate() + i);
    week.push(day);
  }
  return week;
};

const formatDateRange = (weekDates: Date[]) => {
  const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "long" };
  const firstDay = weekDates[0].toLocaleDateString("fr-FR", options);
  const lastDay = weekDates[6].toLocaleDateString("fr-FR", options);
  return `${firstDay} - ${lastDay}`;
};

const formatDate = (dateString: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
  };
  return dateString.toLocaleDateString("fr-FR", options).toUpperCase(); // French locale
};

const StudentCoursesCalendar: React.FC<StudentCoursesCalendarProps> = ({
  courses,
}) => {
  const coursesByDate = getCoursesByDate(courses);
  const [currentWeek, setCurrentWeek] = useState(getWeekDates(new Date()));

  const handleWeekChange = (direction: "next" | "previous") => {
    const referenceDate = new Date(currentWeek[0]); // Start of the current week (Sunday)
    const offset = direction === "next" ? 7 : -7; // Move forward or backward one week
    const newWeek = getWeekDates(
      new Date(referenceDate.setDate(referenceDate.getDate() + offset))
    );
    setCurrentWeek(newWeek);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex w-1/4 items-center gap-2 mb-4">
        <button
          onClick={() => handleWeekChange("previous")}
          className="px-1 py-1 rounded-md hover:bg-ternary-light-color"
        >
          <MdOutlineKeyboardArrowLeft className="text-ternary-color size-12" />
        </button>
        <p className="text-ternary-dark-color text-center font-semibold text-xl">
          {formatDateRange(currentWeek)}
        </p>
        <button
          onClick={() => handleWeekChange("next")}
          className="px-1 py-1 rounded-md hover:bg-ternary-light-color"
        >
          <MdOutlineKeyboardArrowRight className="text-ternary-color size-12" />
        </button>
      </div>

      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-ternary-color text-white">
            {currentWeek.map((date) => {
              const [dayName, dayNumber] = formatDate(date).split(" ");
              return (
                <th
                  key={date.toISOString()}
                  className="px-4 py-2 text-center bg-[#E0F7F9]"
                >
                  <div className="text-ternary-dark-color text-xl font-medium">
                    {dayName}
                  </div>
                  <div className="text-ternary-color text-4xl pl-4 font-bold">
                    {dayNumber}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {currentWeek.map((date) => (
              <td
                key={date.toISOString()}
                className="px-4 py-2 align-top border border-gray-300"
              >
                <div className="flex flex-col flex-wrap gap-4 justify-center">
                  {coursesByDate[date.toLocaleDateString("fr-CA")]?.map(
                    (course) => (
                      <TeacherCourseDisplay key={course.id} course={course} />
                    )
                  ) || (
                    <p className="text-gray-400 text-center">Pas de Cours</p>
                  )}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentCoursesCalendar;
