'use client'

import { useState } from 'react';
import { Alert, AlertDescription } from "components/ui/alert"

export default function AlertMessage() {
    const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ${showAlert ? '' : 'hidden'}`} onClick={handleCloseAlert}>
      <div className="bg-white p-4 rounded shadow-md">
        <Alert>
          <AlertDescription>Hvala vam na vašoj recenziji!</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}