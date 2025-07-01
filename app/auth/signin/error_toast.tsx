'use client';

import { useEffect } from 'react';
import { ToastContainer, Bounce, toast } from 'react-toastify';

export default function ErrorToast() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    if (error) {
      // Display the error message as a toast notification
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: 'colored',
        transition: Bounce,
      });
    }
  }, []);
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark"
      transition={Bounce}
    />
  );
}
