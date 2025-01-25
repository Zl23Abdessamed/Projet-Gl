import { useParams } from "react-router-dom";
import { Subjects } from "../../Types/types";
import SubjectCard from "../main/SubjectCard";

const SubjectsLayout = () => {
  const { level, category } = useParams<{
    level?: string;
    category?: string;
  }>();

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatDisplayLevel = (rawLevel?: string, rawCategory?: string) => {
    if (!rawLevel || !rawCategory) return "3ème année - Lycée";

    // Map category to display text
    const categoryMap = {
      primary: "Primaire",
      cem: "Collège",
      lycee: "Lycée",
    };

    // Get the display category
    const displayCategory =
      categoryMap[rawCategory as keyof typeof categoryMap] || "Lycée";

    // Format the level
    const formattedLevel = capitalizeFirstLetter(rawLevel)
      .replace(/(\d)(ere)/, "$1ère")
      .replace(/(\d)(eme)/, "$1ème");

    return `${formattedLevel} année ${displayCategory}`;
  };
  const subjects: Subjects[] = [
    { name: "arab", coeff: 2 },
    { name: "francais", coeff: 1 },
    { name: "math", coeff: 5 },
    { name: "english", coeff: 1 },
    { name: "phys", coeff: 4 },
    { name: "science", coeff: 4 },
    { name: "english", coeff: 1 },
    { name: "science", coeff: 4 },
    { name: "english", coeff: 1 },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-ternary-color text-center mb-20">
        {formatDisplayLevel(level, category)} - Choisissez une matière
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} props={subject} />
        ))}
      </div>
    </div>
  );
};

export default SubjectsLayout;
