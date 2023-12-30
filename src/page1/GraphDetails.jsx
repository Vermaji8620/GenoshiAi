import { useState } from "react";
import { Link } from "react-router-dom";

const GraphDetails = () => {
  const [graph, setGraph] = useState({
    // Show graph title, description, date created
    title: "Graph title",
    description: "This is graph description presented here",
    dateCreated: "2023-01-01",
    papers: ["1st paper", "2nd paper", "3rd paper"],
  });

  return (
    <div className=" flex flex-col uppercase gap-6">
      <div>
        <h2 className="md:text-5xl text-4xl font-semibold hover:text-fuchsia-400 transform transition-all 0.5s ease-in hover:scale-150">
          {graph.title}
        </h2>
      </div>

      <div>
        <p className="hover:underline underline-offset-8 md:text-3xl">
          {graph.description}
        </p>
      </div>

      <div>
        <p>
          <strong>Date Created:</strong> {graph.dateCreated}
        </p>
      </div>

      <div className="flex md:flex-row gap-4 flex-col justify-between items-center">
        <p>
          <strong>Papers:</strong>
        </p>
        {/* mapping individually */}
        <ul className="flex flex-col gap-3">
          {graph.papers.map((paper, index) => (
            <li key={index}>{paper}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <button className="transform hover:scale-110 hover:border-blue-600">
          Edit Graph
        </button>
        <Link to={"/"}>
          <button className="w-full">Share Graph</button>
        </Link>

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

// export the component

export default GraphDetails;
