import React from "react";
import { StudentPayment } from "../../../Types/types";

interface StudentsPaymentsDisplayTableProps {
  payments: StudentPayment[];
}

const StudentsPaymentsDisplayTable: React.FC<
  StudentsPaymentsDisplayTableProps
> = ({ payments }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-ternary-color text-white">
            <th className="px-4 py-2 text-left">Mois</th>
            <th className="px-4 py-2 text-left">Enseignant</th>
            <th className="px-4 py-2 text-left">Matière</th>
            <th className="px-4 py-2 text-left">Statut de paiement</th>
          </tr>
        </thead>
        <tbody className="bg-[#DBF1F0] text-ternary-color">
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="px-4 py-2">{payment.month}</td>
              <td className="px-4 py-2">{payment.teacherName}</td>
              <td className="px-4 py-2">{payment.subject}</td>
              <td className="px-4 py-2">{payment.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPaymentsDisplayTable;
