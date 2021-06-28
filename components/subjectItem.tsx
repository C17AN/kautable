import React, { useContext } from "react";
import { parseSubjectName } from "../lib/parser/parseSubjectName";
import { SubjectData } from "../types/subject";
import { ModalContext } from "./subjectTable";
import { SubjectContext } from "./tableContainer";

const SubjectItem = ({ data }) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const { selectedSubject, subjectDataList, setSelectedSubject } = useContext(SubjectContext);
  const { id, major, subjectName, profName, subjectScore }: SubjectData = data;

  const selectSubject = (id: string) => {
    if (subjectDataList !== null) {
      setSelectedSubject(subjectDataList.filter((subject: SubjectData) => subject.id === id)[0]);
    }
  };

  return (
    <tr
      className="flex lg:flex-row justify-between m-2 p-2 rounded-lg hover:bg-blue-100 transition-all cursor-pointer"
      onClick={() => {
        setIsModalOpen(true);
        selectSubject(id);
      }}
    >
      <td
        className={`hidden lg:flex justify-start items-center lg:w-[20%] text-xs lg:text-sm ${major}`}
        valign="middle"
      >
        {major}
      </td>
      <td
        className="lg:w-[30%] lg:flex justify-center items-center px-2 text-xs lg:text-sm"
        valign="middle"
      >
        {profName}
      </td>
      <td className="lg:w-[40%] lg:flex justify-center items-center text-xs lg:text-sm">
        {parseSubjectName(subjectName)}
      </td>
      <td className="lg:w-[10%] lg:flex justify-center items-center px-2 text-xs lg:text-sm">
        {subjectScore}
      </td>
    </tr>
  );
};

export default SubjectItem;
