const priorties = [
  {
    name: "Very High",
    color: "#ED4C5C",
  },
  {
    name: "High",
    color: "#F8A541",
  },
  {
    name: "Medium",
    color: "#00A790",
  },
  {
    name: "Low",
    color: "#428BC1",
  },
  {
    name: "Very Low",
    color: "#8942C1",
  },
].map((e) => {
  return {
    label: (
      <>
        <div
          style={{
            width: 14,
            height: 14,
            backgroundColor: e.color,
            borderRadius: "100%",
            marginRight: 19,
          }}
        ></div>
        {e.name}
      </>
    ),
    color: e.color,
    value:
      e.name === "Medium"
        ? "normal"
        : e.name.toLocaleLowerCase().replace(" ", "-"),
  };
});

export { priorties };
