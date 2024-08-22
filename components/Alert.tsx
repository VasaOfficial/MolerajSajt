'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Alert, AlertDescription } from 'components/ui/alert';
import { useState } from 'react';

export default function AlertMessage() {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ${
        showAlert ? '' : 'hidden'
      }`}
      onClick={handleCloseAlert}
      role="dialog"
      aria-modal="true"
    >
      <div className="rounded bg-white p-4 shadow-md">
        <Alert>
          <AlertDescription>Hvala vam na vašoj recenziji!</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
