import { Document } from "../../Types/types";
import { getFileTypeIcon } from "../../utils/utils";

const DocumentDisplay = ({ doc }: { doc: Document }) => {
  const IconComponent = getFileTypeIcon(doc.file);

  return (
    <div>
      <div className="w-full h-16 border border-ternary-extra-light-color bg-[#DBF1F0] flex px-4">
        <div className="flex items-center text-3xl font-normal">
          <span className="text-ternary-dark-color">{doc.description} :</span>
          <span className="text-ternary-extra-light-color">{doc.title}</span>
        </div>
        <div className="w-24 flex justify-center items-center">
          {IconComponent && (
            <IconComponent className="size-7 text-ternary-extra-light-color" />
          )}
        </div>
      </div>
      <p className="text-sm text-ternary-dark-color pl-5">
        Ajouté le: {doc.createdAt.toString()}
      </p>
    </div>
  );
};

export default DocumentDisplay;
