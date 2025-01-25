import React from "react";

interface ModifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

const ModifyModal: React.FC<ModifyModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#DBF1F0] p-6 rounded">
        <h2 className="mb-4 text-lg underline text-center text-main-color">
          Modifier les informations de l’étudiant :
        </h2>
        <form>
          <div className="flex gap-x-4">
            {" "}
            <div className="gap-x-3 mb-4 flex">
              <label className="leading-[2.5] text-main-color text-lg">
                Prenom:
              </label>
              <input
                className="block w-full mt-1  p-2 bg-[#B6D6CFA6]"
                type="text"
                placeholder="Prenom.."
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
              />
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="gap-x-3 mb-4 flex">
              <label className="leading-[2.5] text-main-color text-lg">
                Niveau:
              </label>
              <input
                className="block w-full mt-1 p-2 ml-[9px] bg-[#B6D6CFA6]"
                type="text"
                placeholder="Niveau.."
              />
            </div>
            <div className="gap-x-3 mb-4 flex">
              <label className="leading-[2.5] text-main-color text-lg">
                Matière:
              </label>
              <input
                className="block w-full mt-1 p-2 bg-[#B6D6CFA6]"
                type="text"
                placeholder="Matière.."
              />
            </div>
          </div>

          <div className="gap-x-3 mb-4 flex">
            <label className="leading-[2.5] text-main-color text-lg">
              Groupe:
            </label>
            <input
              className="block w-[30%] mt-1 p-2 bg-[#B6D6CFA6]"
              type="text"
              value="01"
              readOnly
            />
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
              type="button"
              className="px-4 py-2 bg-ternary-extra-light-color text-white rounded"
              onClick={onApply}
            >
              Appliquer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyModal;
