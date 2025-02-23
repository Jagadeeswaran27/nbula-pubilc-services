import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface Props {
  children: React.ReactNode;
  adminOnly?: boolean;
  customerOnly?: boolean;
}

export function ProtectedRoute({ children, adminOnly = false, customerOnly = false }: Props) {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [checkingRole, setCheckingRole] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      if (!user) {
        setCheckingRole(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setIsAdmin(userDoc.data().userType === 'admin');
        }
      } catch (error) {
        console.error('Error checking user role:', error);
      } finally {
        setCheckingRole(false);
      }
    };

    checkUserRole();
  }, [user]);

  if (loading || checkingRole) return null;
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Prevent admins from accessing customer-only routes
  if (customerOnly && isAdmin) {
    return <Navigate to="/booking-history" />;
  }

  // Prevent customers from accessing admin-only routes
  if (adminOnly && !isAdmin) {
    return <Navigate to="/booking" />;
  }

  return <>{children}</>;
}