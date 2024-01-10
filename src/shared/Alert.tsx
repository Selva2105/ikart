import React, { useEffect, Dispatch, SetStateAction } from "react";

interface AlertProps {
  color: string;
  showAlert: boolean;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
  content: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ color, setShowAlert, showAlert, content }) => {

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Check if alert is visible, then set a timeout to hide it after 3 seconds
    if (showAlert) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }

    // Clear the timeout when the component unmounts or when showAlert becomes false
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showAlert, setShowAlert]);

  return (
    <>
      {showAlert ? (
        <div
          className={
            `fixed w-1/5 right-0 top-14 text-white px-6 py-4 border-0 rounded mb-4 bg-${color}-500 transition-opacity ease-in-out duration-300 opacity-100`
          }
        >
          <span className="inline-block align-middle mr-8">{content}</span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-[8px] mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : (
        <div
          className={
            `fixed w-1/5 right-0 top-14 text-white px-6 py-4 border-0 rounded mb-4 bg-${color}-500 transition-opacity ease-in-out duration-300 opacity-0 pointer-events-none`
          }
        >
          <span className="inline-block align-middle mr-8">{content}</span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-[8px] mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
