import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSearchParams } from "react-router-dom";
import DocumentDisplay from "../../../Components/main/DocumentDisplay";
import LightDocumentDisplay from "../../../Components/main/LightDocumentDisplay";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import { Document, LightDocument } from "../../../Types/types";

const SingleTeacherDocuments = () => {
  const [cookies] = useCookies(['token']);
  const [searchParams] = useSearchParams();
  const documentId = searchParams.get("id");
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);

  // Fake data for fallback use
  const fakeFile = new File(["content"], "example.txt", { type: "text/plain" });

  const fakeDocuments: Document[] = [
    {
      id: "1",
      subject: "Logique",
      senderName: "John Doe",
      title: "My First Document",
      description: "This is a description of my first document.",
      file: fakeFile,
      senderId: "user-123",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      subject: "Logique",
      senderName: "John Doe",
      title: "My First Document",
      description: "This is a description of my first document.",
      file: fakeFile,
      senderId: "user-123",
      createdAt: new Date().toISOString(),
    },
  ];

  useEffect(() => {
    if (!documentId) {
      setDocument(null); // Fallback to no specific document if no ID is provided
      setLoading(false);
      return;
    }

    const fetchDocument = async () => {
      try {
        // Simulate fetching with fake data
        const doc = fakeDocuments.find((doc) => doc.id === documentId) || null;
        setDocument(doc);
      } catch {
        setDocument(null);
      } finally {
        setLoading(false);
      }
    };

    if (cookies.token) {
      fetchDocument();
    } else {
      setDocument(null); // Fallback to no specific document if no token
      setLoading(false);
    }
  }, [documentId, cookies.token]);

  const lightDoc = document as LightDocument | null;

  return (
    <MainPagesWrapper
      subTitle="Tout ce dont vous avez besoin pour réussir vos cours"
      title="Ressources Pédagogiques"
    >
      <div>
        <div className="flex justify-center items-center">
          {loading ? (
            <p>Loading...</p>
          ) : lightDoc ? (
            <LightDocumentDisplay doc={lightDoc} />
          ) : (
            <p>No document available.</p>
          )}
        </div>
        <div className="rounded-xl border-2 border-ternary-color py-4 w-10/12 mx-auto flex flex-col gap-4">
          {fakeDocuments.map((doc) => (
            <DocumentDisplay doc={doc} key={doc.id} />
          ))}
        </div>
      </div>
    </MainPagesWrapper>
  );
};

export default SingleTeacherDocuments;
