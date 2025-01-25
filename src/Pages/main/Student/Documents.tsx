import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import LightDocumentDisplay from "../../../Components/main/LightDocumentDisplay";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import { LightDocument } from "../../../Types/types";
import { getStudentDocuments } from "../../../utils/fetchfuncs";

const Documents = () => {
  const [cookies] = useCookies(['token']);
  const [documents, setDocuments] = useState<LightDocument[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fake data for later use
  const fixedDocuments: LightDocument[] = [
    {
      id: "00",
      senderName: "Mr Azouaou",
      subject: "Gl",
    },
    {
      id: "01",
      senderName: "Mr Azouaou",
      subject: "Gl",
    },
    {
      id: "02",
      senderName: "Mr Azouaou",
      subject: "Gl",
    },
  ];

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await getStudentDocuments(cookies.token);
        setDocuments(data);
      } catch (err) {
        setError("Failed to fetch documents. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (cookies.token) {
      fetchDocuments();
    } else {
      setError("No authentication token found");
      setLoading(false);
    }
  }, [cookies.token]);

  return (
    <MainPagesWrapper
      subTitle="Tout ce dont vous avez besoin pour réussir vos cours"
      title="Ressources Pédagogiques"
    >
      <div className="w-full flex flex-col items-center gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : documents ? (
          documents.map((doc) => <LightDocumentDisplay doc={doc} key={doc.id} />)
        ) : (
          <p>No documents available.</p>
        )}
      </div>
    </MainPagesWrapper>
  );
};

export default Documents;