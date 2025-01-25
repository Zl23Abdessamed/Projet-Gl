import React, { useState } from "react";

export interface Student {
  id: string;
  lastName: string;
  firstName: string;
  status: string; // "Payé" or "Non payé"
}

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (student: Student) => void;
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose, onApply }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newStudent: Student = {
      id: Date.now().toString(), // Simple ID generation
      firstName,
      lastName,
      status: "Non payé", // Default status
    };

    onApply(newStudent);
    // Reset form and close
    setFirstName("");
    setLastName("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#DBF1F0] p-6 rounded">
        <h2 className="mb-4 text-lg underline text-center text-main-color">
          Entrer les informations de l’étudiant :
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-x-4">
            <div className="gap-x-3 mb-4 flex">
              <label className="leading-[2.5] text-main-color text-lg">
                Prenom:
              </label>
              <input
                className="block w-full mt-1 p-2 bg-[#B6D6CFA6]"
                type="text"
                placeholder="Prenom.."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="gap-x-3 mb-4 flex ml-[15px]">
              <label className="leading-[2.5] text-main-color text-lg">
                Nom:
              </label>
              <input
                className="block w-full mt-1 p-2 ml-[6px] bg-[#B6D6CFA6]"
                type="text"
                placeholder="Nom.."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 text-main-color bg-[#E5E5E580] border-[#00465699] border-2 rounded"
              onClick={onClose}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-ternary-extra-light-color text-white rounded"
            >
              Appliquer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
