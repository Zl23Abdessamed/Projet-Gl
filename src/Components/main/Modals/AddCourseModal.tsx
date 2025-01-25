import React, { useState } from "react";
import { Course } from "../../../Types/types";
import { CourseType } from "../../../Types/constants";

interface AddCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (data: Course) => void;
}

const AddCourseModal: React.FC<AddCourseModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [isPresentiel, setIsPresentiel] = useState(true);
  const [adresse, setAdresse] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [subject, setSubject] = useState("");
  const [group, setGroup] = useState("");

  if (!isOpen) return null;

  const handleApply = () => {
    const courseData: Course = {
      id: "generated-id", // Replace with actual ID generation logic
      type: isPresentiel ? CourseType.local : CourseType.online,
      teacherId: "teacher-id", // Replace with actual teacher ID
      teacherName: "Teacher Name", // Replace with actual teacher name
      location: isPresentiel ? adresse : link,
      time: new Date(`${date}T${hour}`),
      subject,
    };
    onApply(courseData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#DBF1F0] p-6 rounded">
        <h2 className="mb-4 text-lg underline text-center text-main-color">
          Ajouter une séance de cours :
        </h2>
        <form>
          <div className="flex">
            <div className="mb-4 flex">
              <label className=" text-main-color text-lg mb-2 pr-4">
                Date :
              </label>
              <input
                className=" w-[150px] p-2 bg-[#B6D6CFA6] focus:outline-none focus:ring-2 focus:ring-main-color"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-4 flex">
              <label className=" text-main-color text-lg mb-2 px-3">
                Heure :
              </label>
              <input
                className=" w-[120px] p-2 bg-[#B6D6CFA6] focus:outline-none focus:ring-2 focus:ring-main-color"
                type="time"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <label className=" text-main-color text-lg mb-2 pr-7 pl-3">
              Type :
            </label>
            <input
              className=" w-[300px] p-2 bg-[#B6D6CFA6] focus:outline-none focus:ring-2 focus:ring-main-color"
              type="text"
              placeholder="Type de séance.."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4 flex">
            <label className=" text-main-color text-lg mb-2 pr-4">
              Groupe :
            </label>
            <input
              className="w-[300px] p-2 bg-[#B6D6CFA6] focus:outline-none focus:ring-2 focus:ring-main-color"
              type="number"
              min="1"
              max="10"
              value={group}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setGroup(value);
                }
              }}
            />
          </div>
          <div className="mb-4 flex">
            <label className=" text-main-color text-lg mb-2 pr-5">
              Présentiel ?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                className={`px-4 py-2 rounded ${
                  isPresentiel
                    ? "bg-main-color text-white"
                    : "bg-[#E5E5E580] text-main-color"
                }`}
                onClick={() => setIsPresentiel(true)}
              >
                Oui
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded ${
                  !isPresentiel
                    ? "bg-main-color text-white"
                    : "bg-[#E5E5E580] text-main-color"
                }`}
                onClick={() => setIsPresentiel(false)}
              >
                Non
              </button>
            </div>
          </div>

          {isPresentiel ? (
            <div className="mb-4 flex">
              <label className=" text-main-color pr-3 text-lg mb-2">
                Adresse :
              </label>
              <input
                className=" w-[270px] p-2 bg-[#B6D6CFA6] focus:outline-none focus:ring-2 focus:ring-main-color"
                type="text"
                placeholder="Adresse.."
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
              />
            </div>
          ) : (
            <div className="mb-4 flex">
              <label className=" text-main-color pr-3 text-lg mb-2 focus:outline-none focus:ring-2 focus:ring-main-color">
                Lien (Meet) :
              </label>
              <input
                className=" w-[270px] p-2 bg-[#B6D6CFA6] focus:outline-none focus:ring-2 focus:ring-main-color"
                type="text"
                placeholder="Lien.."
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          )}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 text-main-color bg-[#E5E5E580] border-[#00465699] border-2 rounded"
              onClick={onClose}
            >
              Annuler
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-ternary-extra-light-color text-white rounded"
              onClick={handleApply}
            >
              Appliquer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
