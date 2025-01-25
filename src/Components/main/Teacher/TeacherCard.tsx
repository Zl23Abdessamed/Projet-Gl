import React from "react";
import { Teacher } from "../../../Types/types";
import { IoSchoolSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
//not finished

interface CmpDataType {
  teacher: Teacher;
}

const LabelCmp = ({ label, data }: { label: string; data: string }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-ternary-dark-color text-base font-semibold">
        {label + ":"}
      </span>
      <span className="w-11/12 text-wrap text-ternary-semi-dark-color text-base font-light">
        {data}
      </span>
    </div>
  );
};

const TeacherCard: React.FC<CmpDataType> = ({ teacher }) => {
  return (
    <div className="h-[22rem] w-[33rem] rounded-lg border-2 border-ternary-color grid grid-cols-[15%,85%] relative overflow-hidden">
      <div className="bg-ternary-semi-dark-color h-full"></div>
      <div>
        <div className="w-8/12 mx-auto">
          <p className="text-ternary-dark-color text-xl text-center">
            {teacher.name}
          </p>
          <div className="flex items-center justify-center gap-3 border-b border-b-ternary-semi-dark-color mb-2">
            <IoSchoolSharp className="size-9" />
            <div className="flex gap-1 pl-1">
              <span className="border-l border-l-ternary-extra-light-color pl-2 mb-2 mr-2">
                {teacher.subject.map((subj) => (
                  <p className="text-ternary-dark-color text-base">{subj}</p>
                ))}
              </span>
              <span>
                {teacher.level.map((lvl) => (
                  <p className="text-ternary-dark-color text-base">{lvl}</p>
                ))}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <LabelCmp label="Experience" data={teacher.experience} />
            <LabelCmp label="Diplome" data={teacher.diploma} />
            <LabelCmp label="Disponibilité" data={teacher.available} />
            <LabelCmp label="Localisation" data={teacher.location} />
            <LabelCmp label="Tarifs" data={teacher.tarifs.toString()} />
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <h6 className="text-ternary-dark-color text-lg"> Contacts</h6>
              <span className="text-ternary-dark-color text-base flex items-center pl-4">
                <span>
                  <MdLocalPhone className="size-7 " />
                </span>
                <span>{teacher.contacts.phone}</span>
              </span>
              <span className="w-11/12 text-wrap text-ternary-dark-color text-base flex items-center pl-4">
                <span>
                  <IoIosMail className="size-7 " />
                </span>
                <span>{teacher.contacts.email}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[40%] left-[9%] w-fit p-2 rounded-full border border-ternary-light-color">
        {teacher.imageUrl ? (
          <img src="" alt="" className="size-12" />
        ) : (
          <IoPerson className="size-12 text-ternary-extra-light-color" />
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
