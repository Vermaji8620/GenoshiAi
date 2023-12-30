import { useState } from "react";

const GraphDetails = () => {
  const [graph, setGraph] = useState({
    title: "Graph title",
    description: "This is graph description presented here",
    dateCreated: "2023-01-01",
    papers: ["1st paper", "2nd paper", "3rd paper"],
  });

  return (
    <div className="graph-details-container flex flex-col uppercase gap-6">
      <div>
        <h2 className="graph-details-title md:text-5xl text-4xl font-semibold">
          {graph.title}
        </h2>
      </div>

      <div>
        <p className="graph-details-description md:text-3xl">
          {graph.description}
        </p>
      </div>

      <div className="graph-details-info">
        <p>
          <strong>Date Created:</strong> {graph.dateCreated}
        </p>
      </div>

      <div className="graph-details-papers flex md:flex-row gap-4 flex-col justify-between items-center">
        <p>
          <strong>Papers:</strong>
        </p>
        <ul className="flex flex-col gap-3">
          {graph.papers.map((paper, index) => (
            <li key={index}>{paper}</li>
          ))}
        </ul>
      </div>

      <div className="graph-details-actions flex flex-col gap-4">
        <button>Edit Graph</button>
        <button>Share Graph</button>
        <button
          onClick={() => {
            setGraph();
          }}
          disabled
        >
          Delete Graph
        </button>
      </div>
    </div>
  );
};

export default GraphDetails;
