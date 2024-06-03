const newComers = [
  { name: "Sanya", id: 1 },
  { name: "Danil", id: 2 },
  { name: "Svytoy", id: 3 },
];

const listItems = newComers.map((person) => (
  <li key={person.id}>{person.name}</li>
));

function RenderingLists() {
  return (
    <div>
      <h3>Rendered List</h3>
      <ul>{listItems}</ul>
    </div>
  );
}

export default RenderingLists;
