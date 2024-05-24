// components/Welcome.tsx
interface WelcomeProps {
  onNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Welcome to Opher</h1>
      <p className="mb-4 text-gray-600">
        This onboarding process will guide you through entering your personal details, address, education, work experiences, projects, and necessary documents required to complete this onboarding.
      </p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={onNext}>
        Start Onboarding
      </button>
    </div>
  );
};

export default Welcome;
