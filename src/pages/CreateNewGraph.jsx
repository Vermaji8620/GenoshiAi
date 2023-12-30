import { useState } from "react";

const CreateNewGraph = () => {
  const [graphData, setGraphData] = useState({
    title: "",
    description: "",
    selectedPapers: [],
    layout: "gradient",
    colors: "highlighted",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGraphData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaperSelection = (selectedPapers) => {
    setGraphData((prevData) => ({
      ...prevData,
      selectedPapers,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", graphData);
  };

  return (
    <div className="uppercase flex flex-col gap-6">
      <h2>Create New Graph</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 text-left items-left">
          <div className="flex justify-between">
            <label>Graph Title:</label>
            <input
              type="text"
              name="title"
              value={graphData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex justify-between">
            <label>Description:</label>
            <textarea
              name="description"
              value={graphData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex justify-between">
            <label>Select Papers:</label>
            <input type="file" multiple onChange={handlePaperSelection} />
          </div>

          <div className="flex justify-between">
            <label>Layout:</label>
            <select
              name="layout"
              value={graphData.layout}
              onChange={handleInputChange}
            >
              <option value="default">Default</option>
              <option value="gradient">gradient</option>
              <option value="landscape">landscape</option>
            </select>
          </div>

          <div className="flex justify-between">
            <label>Colors:</label>
            <select
              name="colors"
              value={graphData.colors}
              onChange={handleInputChange}
            >
              <option value="default">Default</option>
              <option value="vibrant">vibrant</option>
              <option value="highlighted">highlighted</option>
            </select>
          </div>

          <button className="hover:bg-slate-800">Create Graph</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewGraph;
