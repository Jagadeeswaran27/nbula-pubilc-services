import { db } from './config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Function to ensure the required document structure exists
export const ensureFirestoreStructure = async () => {
  try {
    // Check if the handyman document exists in services collection
    const handymanDocRef = doc(db, 'services', 'handyman');
    const handymanDoc = await getDoc(handymanDocRef);
    
    // If it doesn't exist, create it
    if (!handymanDoc.exists()) {
      await setDoc(handymanDocRef, {
        name: 'handyman',
        description: 'Handyman services',
        createdAt: new Date()
      });
    }
    
    // Check if company1 document exists in companies subcollection
    const company1DocRef = doc(handymanDocRef, 'companies', 'company1');
    const company1Doc = await getDoc(company1DocRef);
    
    // If it doesn't exist, create it
    if (!company1Doc.exists()) {
      await setDoc(company1DocRef, {
        name: 'company1',
        description: 'First handyman company',
        createdAt: new Date()
      });
    }
    
    console.log('Firestore structure initialized successfully');
    return true;
  } catch (error) {
    console.error('Error initializing Firestore structure:', error);
    return false;
  }
};