import { useState, } from "react";

const RandomNamePicker = () => {
  // all states
  const [randomName, setRandomName] = useState("");
  const [inputNames, setInputNames] = useState([]);
  const [inputText, setInputText] = useState("");

  // setRandomName function
  const pickRandomName = () => {
    if (inputNames.length === 0) {
      setRandomName("No names available");
      return;
    }
    const randomIndex = Math.floor(Math.random() * inputNames.length);
    setRandomName(inputNames[randomIndex]);
  };

  //setInputText function
  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  // setInputNames function
  const handleAddNames = () => {
    setInputNames((prevInputNames) => [
      ...prevInputNames,
      ...inputText.split("\n"),
    ]);
    setInputText("");
  };

  // clear setInputNames & setRandomName fields
  const handleClearNames = () => {
    setInputNames([]);
    setRandomName("");
  };

  return (
    <div className="max-w-2xl p-6 mt-10 mr-auto ml-auto bg-white border border-gray-200 rounded-lg shadow">
      <h1 className="mb-6 text-2xl text-center font-bold tracking-tight text-gray-900">
        Simple Random Name Picker App
      </h1>

      <div>
        <div className="flex">

          {/* names input area */}
          <div className="w-1/2 mr-8">
            <label className="block mb-2 text-m font-medium text-gray-900">
              Add Names:
            </label>
            <textarea
              // ref={inputRef}
              rows="10"
              placeholder="Enter all names, each name should be in new line..."
              value={inputText}
              onChange={handleInputChange}
              className="bg-gray-50 mb-3 border p-3 w-full border-gray-300 text-gray-900 text-m rounded-lg"
            ></textarea>
          </div>

          {/* names display area */}
          <div className="w-1/2">
            <h2 className="block mb-2 text-m font-medium text-gray-900">
              Added Names:
            </h2>
            <ul className="list-disc pl-8">
              {inputNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* all buttons */}
        <div className="flex">
          <button
            className="text-white w-1/3 bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-m px-5 py-2.5 mr-3 mb-3"
            onClick={handleAddNames}
          >
            Add Names
          </button>
          <button
            className="text-white w-1/3 bg-green-700 hover:bg-green-800 font-medium rounded-md text-m px-5 py-2.5 mr-3 mb-3"
            onClick={pickRandomName}
          >
            Pick a Name
          </button>
          <button
            className="text-white w-1/3 bg-red-700 hover:bg-red-800 font-medium rounded-md text-m px-5 py-2.5 mb-3"
            onClick={handleClearNames}
          >
            Clear Names
          </button>
        </div>

        {/* display the winner name */}
        <div>
          {randomName && (
            <p className="block text-xl font-medium text-gray-900">
              Today's class will take: {randomName}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomNamePicker;
