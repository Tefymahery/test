import { Button, Snackbar } from '@mui/material';
import { useState, useEffect } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Par exemple, afficher le Snackbar après 3 secondes
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        message="Bienvenue sur MUI!"
        onClose={handleClose}
      />
      <Button variant="contained" onClick={() => setOpen(true)}>
        Afficher Notification
      </Button>
    </div>
  );
}
