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
    <div className="uppercase flex flex-col gap-16 bg-zinc-900 p-4 rounded-lg">
      <h2 className="text-4xl  font-bold hover:underline">Create New Graph</h2>
      {/* Form to specify graph title and description */}
      <form className="min-w-min" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 text-left items-left">
          <div className="flex justify-between md:flex-row flex-col">
            <label>Graph Title:</label>
            <input
              type="text"
              className="p-2 rounded-md"
              name="title"
              value={graphData.title}
              onChange={handleInputChange}
              placeholder="Enter Graph Title"
              required
            />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <label>Description:</label>
            <textarea
              name="description"
              value={graphData.description}
              placeholder="Enter Description"
              className="p-2 rounded-lg"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex justify-between items-center md:flex-row flex-col">
            <label>Select Papers:</label>
            {/* Upload papers or select from favourites/collections */}
            <input type="file" multiple onChange={handlePaperSelection} />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <label>Layout:</label>
            <select
              name="layout"
              value={graphData.layout}
              onChange={handleInputChange}
              className="p-2 rounded-md"
            >
              {/* Configure graph settings - layout, colors, etc */}
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
              className="p-2 rounded-md"
              onChange={handleInputChange}
            >
              <option value="default">Default</option>
              <option value="vibrant">vibrant</option>
              <option value="highlighted">highlighted</option>
            </select>
          </div>

          {/* View graph visualization preview */}
          {/* i did not understand whats the meaning of this, so did not implement this */}

          <button className="md:w-full hover:bg-slate-800">Create Graph</button>
        </div>
      </form>
    </div>
  );
};

// exporting the CreateNewGraph component

export default CreateNewGraph;
