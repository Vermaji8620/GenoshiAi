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
    <div className="uppercase flex flex-col gap-16">
      <h2 className="text-3xl font-semibold">Create New Graph</h2>
      <form className="min-w-min" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 text-left items-left">
          <div className="flex justify-between md:flex-row flex-col">
            <label>Graph Title:</label>
            <input
              type="text"
              name="title"
              value={graphData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <label>Description:</label>
            <textarea
              name="description"
              value={graphData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <label>Select Papers:</label>
            <input type="file" multiple onChange={handlePaperSelection} />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
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

          <div className="flex justify-between md:flex-row flex-col">
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

          <button className="md:w-full hover:bg-slate-800">Create Graph</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewGraph;
