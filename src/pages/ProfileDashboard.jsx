const ProfileDashboard = () => {
  const user = {
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
  };

  return (
    // my profile dashboard

    <div className="uppercase flex flex-col gap-6 text-left">
      <section className="flex flex-col items-center gap-2">
        <h2>User Profile</h2>
        <img
          src={user.profilePhoto}
          className="sm:h-[200px] sm:w-[200px]"
          alt="Profile"
        />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Bio: {user.bio}</p>
      </section>

      {/* Account Details */}
      <section>
        <h2>Account Details</h2>
        <p>Subscription Plan: {user.subscription.plan}</p>
        <p>Status: {user.subscription.status}</p>
      </section>

      {/* Usage Metrics */}
      <section>
        <h2>Usage Metrics</h2>
        <p>Graphs Created: {user.usageMetrics.graphsCreated}</p>
        <p>Graphs Shared: {user.usageMetrics.graphsShared}</p>
        <p>Papers Collected: {user.usageMetrics.papersCollected}</p>
      </section>

      {/* Recent Activity Feed */}
      <section>
        <h2>Recent Activity</h2>
        <ul>
          {user.recentActivity.map((activity, index) => (
            // mapping the activity array
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

      {/* Actions as specified */}
      <section className="flex flex-col gap-3">
        <button>Create New Graph</button>
        <button>Share Graphs</button>
        <button>Upload Papers</button>
      </section>

      {/* List of Saved Graphs */}
      <section>
        <h2>Saved Graphs</h2>
        <ul>
          {user.savedGraphs.map((graph, index) => (
            <li key={index}>
              <p>Title: {graph.title}</p>
              <p>Date Created: {graph.dateCreated}</p>
              <img src={graph.thumbnail} alt={`Thumbnail for ${graph.title}`} />
            </li>
          ))}
        </ul>
      </section>

      {/* Link to Favorites and Collections pages */}
      <section>
        <h2>Links</h2>
        <a href="/favorites">Favorites</a>
        <a href="/collections">Collections</a>
      </section>
    </div>
  );
};

export default ProfileDashboard;
