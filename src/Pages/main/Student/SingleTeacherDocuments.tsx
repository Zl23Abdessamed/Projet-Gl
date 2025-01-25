import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSearchParams } from "react-router-dom";
import DocumentDisplay from "../../../Components/main/DocumentDisplay";
import LightDocumentDisplay from "../../../Components/main/LightDocumentDisplay";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import { Document, LightDocument } from "../../../Types/types";
import { getStudentDocumentById } from "../../../utils/fetchfuncs";

const SingleTeacherDocuments = () => {
  const [cookies] = useCookies(['token']);
  const [searchParams] = useSearchParams();
  const documentId = searchParams.get("id");
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fake data for later use
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
      setError("No document ID provided in the URL.");
      setLoading(false);
      return;
    }

    const fetchDocument = async () => {
      try {
        const data = await getStudentDocumentById(documentId, cookies.token);
        setDocument(data);
      } catch (err) {
        setError("Failed to fetch document. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (cookies.token) {
      fetchDocument();
    } else {
      setError("No authentication token found");
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
          ) : error ? (
            <p className="text-red-500">{error}</p>
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