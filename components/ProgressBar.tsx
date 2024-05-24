// components/ProgressBar.tsx
export interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps }) => {
  const percentage = ((step + 1) / totalSteps) * 100;

  return (
    <div className="relative w-full h-4 bg-gray-300 rounded-full">
      <div
        className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full transition-width duration-500 ease-in-out"
        style={{ width: `${percentage}%` }}
      ></div>
      <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-blue-700">
        {percentage.toFixed(0)}%
      </span>
    </div>
  );
};

export default ProgressBar;
