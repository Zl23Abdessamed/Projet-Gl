import React from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: "student" | "course";
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  type,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#DBF1F0] p-6 text-main-color rounded text-center">
        {type == "student" ? (
          <h2 className="mb-4 text-lg">
            Voulez-vous vraiment supprimer l'étudiant ?
          </h2>
        ) : (
          <h2 className="mb-4 text-lg">
            Voulez-vous vraiment supprimer la séance ?
          </h2>
        )}

        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 text-main-color bg-[#E5E5E580] border-[#00465699] border-2 rounded"
            onClick={onClose}
          >
            Non
          </button>
          <button
            className="px-4 py-2 bg-ternary-extra-light-color text-white rounded"
            onClick={onConfirm}
          >
            Oui
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
