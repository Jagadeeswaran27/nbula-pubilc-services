import { useEffect, useState } from 'react';
import { app } from '../firebase/config';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where,
  DocumentData
} from 'firebase/firestore';

// Initialize Firestore
const db = getFirestore(app);

// Custom hook for Firestore operations
export const useFirestore = (collectionName: string) => {
  const [documents, setDocuments] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get all documents from a collection
  const getDocuments = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDocuments(docs);
      setError(null);
    } catch (err) {
      console.error("Error getting documents: ", err);
      setError("Failed to fetch documents");
    } finally {
      setLoading(false);
    }
  };

  // Add a document to a collection
  const addDocument = async (data: any) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      setDocuments(prev => [...prev, { id: docRef.id, ...data }]);
      return { id: docRef.id, ...data };
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to add document");
      throw err;
    }
  };

  // Update a document
  const updateDocument = async (id: string, data: any) => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);
      setDocuments(prev => 
        prev.map(item => item.id === id ? { ...item, ...data } : item)
      );
      return { id, ...data };
    } catch (err) {
      console.error("Error updating document: ", err);
      setError("Failed to update document");
      throw err;
    }
  };

  // Delete a document
  const deleteDocument = async (id: string) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      setDocuments(prev => prev.filter(item => item.id !== id));
      return id;
    } catch (err) {
      console.error("Error deleting document: ", err);
      setError("Failed to delete document");
      throw err;
    }
  };

  // Query documents
  const queryDocuments = async (field: string, operator: any, value: any) => {
    setLoading(true);
    try {
      const q = query(collection(db, collectionName), where(field, operator, value));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return docs;
    } catch (err) {
      console.error("Error querying documents: ", err);
      setError("Failed to query documents");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Load documents on mount
  useEffect(() => {
    getDocuments();
  }, [collectionName]);

  return { 
    documents, 
    loading, 
    error, 
    addDocument, 
    updateDocument, 
    deleteDocument, 
    getDocuments,
    queryDocuments
  };
};

export default useFirestore;