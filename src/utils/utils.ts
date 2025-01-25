import { FaFilePdf, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileImage } from 'react-icons/fa';
import { AiFillFileText } from 'react-icons/ai';
import { IconType } from 'react-icons';


export const getFileTypeIcon = (file: File) => {
    let IconComponent: IconType | null = null;

    switch (file.type) {
        case "application/pdf":
            IconComponent = FaFilePdf;
            break;
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            IconComponent = FaFileWord;
            break;
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            IconComponent = FaFileExcel;
            break;
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
            IconComponent = FaFilePowerpoint;
            break;
        case "image/jpeg":
        case "image/png":
            IconComponent = FaFileImage;
            break;
        case "text/plain":
            IconComponent = AiFillFileText;
            break;
        default:
            return null;
    };

    return IconComponent || null;
};
