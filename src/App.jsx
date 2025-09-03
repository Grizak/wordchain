import React, { useState } from "react";
import { Plus, RotateCcw, Trophy } from "lucide-react";

export default function WordChainGame() {
  const [words, setWords] = useState(["SUNSHINE"]); // Starting word
  const [currentInput, setCurrentInput] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(1);

  const getLastLetter = (word) => word.slice(-1).toLowerCase();
  const getFirstLetter = (word) => word.charAt(0).toLowerCase();

  const addWord = () => {
    const newWord = currentInput.trim().toUpperCase();

    if (!newWord) {
      setMessage("Please enter a word!");
      return;
    }

    if (newWord.length < 2) {
      setMessage("Words must be at least 2 letters long!");
      return;
    }

    const lastWord = words[words.length - 1];
    const expectedLetter = getLastLetter(lastWord);
    const actualLetter = getFirstLetter(newWord);

    if (actualLetter !== expectedLetter) {
      setMessage(
        `Word must start with "${expectedLetter.toUpperCase()}" (last letter of "${lastWord}")`
      );
      return;
    }

    if (words.map((w) => w.toLowerCase()).includes(newWord.toLowerCase())) {
      setMessage("Word already used! Try a different one.");
      return;
    }

    setWords([...words, newWord]);
    setCurrentInput("");
    setMessage(
      `Great! Next word must start with "${getLastLetter(
        newWord
      ).toUpperCase()}"`
    );
    setScore(score + 1);
  };

  const resetGame = () => {
    setWords(["SUNSHINE"]);
    setCurrentInput("");
    setMessage("");
    setScore(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addWord();
    }
  };

  const lastWord = words[words.length - 1];
  const nextLetter = getLastLetter(lastWord).toUpperCase();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-600 mb-2">
            🔗 Word Chain
          </h1>
          <p className="text-gray-600">
            Each word must start with the last letter of the previous word!
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold text-lg">Chain Length: {score}</span>
          </div>
          <button
            onClick={resetGame}
            className="flex items-center space-x-1 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>New Game</span>
          </button>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4 max-h-48 overflow-y-auto">
            {words.map((word, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow-md">
                  {word}
                </div>
                {index < words.length - 1 && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Enter a word starting with "${nextLetter}"...`}
              className="flex-1 px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none text-lg"
            />
            <button
              onClick={addWord}
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center space-x-1"
            >
              <Plus className="w-5 h-5" />
              <span>Add</span>
            </button>
          </div>

          {message && (
            <div
              className={`p-3 rounded-lg text-center ${
                message.includes("Great!") || message.includes("start with")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <div className="text-center text-gray-600">
            <p className="text-lg">
              Next word must start with:{" "}
              <span className="font-bold text-purple-600 text-2xl">
                {nextLetter}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">💡 Tips:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>
              • Try to think of words that end with common letters (like E, S,
              T)
            </li>
            <li>• Avoid words ending in difficult letters (like Q, X, Z)</li>
            <li>• No repeating words that have already been used!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
