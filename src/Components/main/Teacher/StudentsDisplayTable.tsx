import React, { useState } from "react";
import { FaUserLargeSlash } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { BsXCircleFill } from "react-icons/bs";
import ModifyModal from "../Modals/ModifyModal";
import DeleteModal from "../Modals/DeleteModal";

interface Student {
  id: string;
  lastName: string;
  firstName: string;
  status: string;
}

interface StudentDisplayTableProps {
  students: Student[];
}

const StudentDisplayTable: React.FC<StudentDisplayTableProps> = ({
  students,
}) => {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleModify = () => setIsModifyModalOpen(true);
  const handleDelete = () => setIsDeleteModalOpen(true);

  const handleCloseModify = () => setIsModifyModalOpen(false);
  const handleCloseDelete = () => setIsDeleteModalOpen(false);

  const handleApplyChanges = () => {
    console.log("Changes applied.");
    setIsModifyModalOpen(false);
  };

  const handleConfirmDelete = () => {
    console.log("Student deleted.");
    setIsDeleteModalOpen(false);
  };

  const toggleStatus = (id: string) => {
    console.log(`Payment Status changed, Student : ${id}`);
  };

  return (
    <>
      <div className="overflow-x-auto font-poppins">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-ternary-color text-white">
              <th className="px-4 py-2 bg-secondary-color"></th>
              <th className="px-4 py-2 text-lg font-light text-center">Nom</th>
              <th className="px-4 py-2 text-lg  font-light text-center">
                Prénom
              </th>
              <th className="px-4 py-2 text-lg  font-light text-center">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#DBF1F0] text-ternary-color">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-4 py-2 flex gap-2">
                  <FaUserPen
                    className="text-black cursor-pointer hover:text-gray-600 mt-2"
                    size={20}
                    title="Modifier"
                    onClick={() => handleModify()}
                  />
                  {/* Delete Icon */}
                  <FaUserLargeSlash
                    className="text-red-500 cursor-pointer hover:text-red-700 mt-2"
                    size={20}
                    title="Supprimer"
                    onClick={() => handleDelete()}
                  />
                </td>
                <td className="px-4 py-2">{student.lastName}</td>
                <td className="px-4 py-2">{student.firstName}</td>
                <td className="px-4 py-2">
                  {student.status === "Payé" ? (
                    <span className="flex items-center">
                      {student.status}
                      <FaCheck className="text-green-500 ml-2" />
                    </span>
                  ) : student.status === "Non payé" ? (
                    <span className="flex items-center">
                      {student.status}
                      <BsXCircleFill className="text-red-500 ml-2" />
                    </span>
                  ) : (
                    student.status
                  )}
                </td>
                <td className="px-4 py-2 text-center bg-secondary-color font-poppins">
                  <button
                    className="px-4 py-2 bg-[#0084A480] border-2 border-main-color text-main-color rounded-3xl hover:bg-ternary-light-color"
                    onClick={() => toggleStatus(student.id)}
                  >
                    Changer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <ModifyModal
        isOpen={isModifyModalOpen}
        onClose={handleCloseModify}
        onApply={handleApplyChanges}
      />
      <DeleteModal
        type="student"
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default StudentDisplayTable;
