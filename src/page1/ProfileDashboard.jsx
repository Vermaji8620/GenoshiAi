import { useState } from "react";
// importing the useState hook from react
// importing the Link component from react-router-dom
import { Link } from "react-router-dom";

const ProfileDashboard = () => {
  // here we are using the useState hook to store the user data
  const [user, setUser] = useState({
    name: "Aditya Raj Verma",
    email: "vadityaraj67@gmail.com",
    profilePhoto:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=2000",
    bio: "This is for the internship assignment",
    subscription: {
      plan: "Gold",
      status: "Active",
    },
    usageMetrics: {
      graphsCreated: 10,
      graphsShared: 5,
      papersCollected: 20,
    },
    recentActivity: [
      { type: "graph", name: "Graph 1", date: "30/12/2023" },
      { type: "collection", name: "Collection 1", date: "30/12/2023" },
    ],
    savedGraphs: [
      {
        title: "1st graph",
        dateCreated: "30/12/2023",
        thumbnail:
          "https://media.istockphoto.com/id/1225609127/vector/growing-business-concept.jpg?s=612x612&w=0&k=20&c=RWDV5WgdK55I-9KB9xWBWs770pWE3qCGK34ZCvB1uG8=",
      },
      {
        title: "2nd Graph ",
        dateCreated: "29/12/2023",
        thumbnail:
          "https://png.pngtree.com/element_our/sm/20180518/sm_5afec55eb036b.png",
      },
    ],
  });
  return (
    <div className="uppercase flex flex-col gap-6 text-left">
      <section className="flex flex-col items-center gap-2">
        <h2 className="text-slate-200 text-2xl">User Profile</h2>
        <img
          src={user.profilePhoto}
          className="sm:h-[200px] sm:w-[200px]"
          alt="Profile"
        />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Bio: {user.bio}</p>
      </section>

      <div>
        <Link to={`/account`}>
          {/* link is used to navigate to the desrired page */}
          <button className="w-full">See profile Details</button>
        </Link>
      </div>

      <div className="flex flex-col w-full gap-16">
        <section>
          <h2 className="text-3xl underline">Account Details</h2>
          <p>Subscription Plan: {user.subscription.plan}</p>
          <p>Status: {user.subscription.status}</p>
        </section>

        <section>
          <h2 className="text-4xl underline">Usage Metrics</h2>
          <p>Graphs Created: {user.usageMetrics.graphsCreated}</p>
          <p>Graphs Shared: {user.usageMetrics.graphsShared}</p>
          <p>Papers Collected: {user.usageMetrics.papersCollected}</p>
        </section>

        <section>
          <h2 className="text-4xl underline">Recent Activity</h2>
          <ul>
            {user.recentActivity.map((activity, index) => (
              <li key={index}>
                {activity.type === "graph" && (
                  <p>{`Created graph "${activity.name}" on ${activity.date}`}</p>
                )}
                {activity.type === "collection" && (
                  <p>{`Created collection "${activity.name}" on ${activity.date}`}</p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <Link to={`/createnewgraph`}>
            <button className="w-full">
              Create New Graph(Click to navigate)
            </button>
          </Link>
          <button
            className="w-full"
            onClick={() => {
              setUser();
            }}
          >
            Share Graphs
          </button>
          <button className="w-full">Upload Papers</button>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-4xl underline">Saved Graphs</h2>
          <ul className="flex flex-col gap-16">
            {user.savedGraphs.map((graph, index) => (
              <li key={index} className="text-blue-400">
                <p>Title: {graph.title}</p>
                <p>Date Created: {graph.dateCreated}</p>
                <img
                  src={graph.thumbnail}
                  className="w-[500px] "
                  alt={`Thumbnail for ${graph.title}`}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col text-center gap-3">
          {/* the fourites button is linked to the /pricing page */}
          <Link to={"/pricing"}>
            <button className="bg-slate-700 text-white hover:bg-slate-900 w-full">
              Favourites
            </button>
          </Link>
          {/* the collections button is linked to the /getgraphdetails page */}
          <Link to={"/getgraphdetails"}>
            <button className="bg-slate-700 text-white hover:bg-slate-900 w-full">
              Collections
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

// exporting the compoennt
export default ProfileDashboard;
