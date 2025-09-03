function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Hello Tailwind!
        </h1>
        <p className="text-gray-600 mb-6">Your template is ready to use!</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          onClick={() => {
            console.log(
              "Hello, This is the callback from the Get Started button"
            );
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
