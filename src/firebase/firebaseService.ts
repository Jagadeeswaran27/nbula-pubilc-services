import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  addDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { app } from './config';

// Initialize Firestore
const db = getFirestore(app);

// Function to save booking data to Firestore
export const saveBooking = async (bookingData: any) => {
  try {
    // Reference to services collection
    const servicesRef = collection(db, 'services');
    
    // Reference to the painting document
    const paintingDocRef = doc(servicesRef, 'painting');
    
    // Check if painting document exists, if not create it
    const paintingDoc = await getDoc(paintingDocRef);
    if (!paintingDoc.exists()) {
      await setDoc(paintingDocRef, { name: 'painting' });
    }
    
    // Reference to companies collection
    const companiesRef = collection(paintingDocRef, 'companies');
    
    // Reference to company1 document
    const company1DocRef = doc(companiesRef, 'company1');
    
    // Check if company1 document exists, if not create it
    const company1Doc = await getDoc(company1DocRef);
    if (!company1Doc.exists()) {
      await setDoc(company1DocRef, { name: 'company1' });
    }
    
    // Reference to bookings collection
    const bookingsRef = collection(company1DocRef, 'bookings');
    
    // Add booking document with timestamp
    const bookingWithTimestamp = {
      ...bookingData,
      createdAt: serverTimestamp()
    };
    
    // Add the document to the bookings collection
    const newBookingRef = await addDoc(bookingsRef, bookingWithTimestamp);
    
    return {
      success: true,
      id: newBookingRef.id,
      message: 'Booking saved successfully'
    };
  } catch (error) {
    console.error('Error saving booking:', error);
    return {
      success: false,
      message: 'Failed to save booking'
    };
  }
};