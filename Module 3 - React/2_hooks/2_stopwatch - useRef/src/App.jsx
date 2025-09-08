import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null); // store interval ID

  const startTimer = () => {
    if (isRunning) return; // Prevent multiple intervals
    setIsRunning(true);

    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0");
    const seconds = String(timeInSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Stopwatch ⏱️</h1>
      <div className="text-5xl font-mono mb-6">{formatTime(time)}</div>

      <div className="flex gap-4">
        <button
          onClick={startTimer}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
