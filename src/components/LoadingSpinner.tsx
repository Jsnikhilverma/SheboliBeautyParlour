
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-beauty-pink animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-beauty-lavender animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-lg">Serenity</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
