function ListGroup() {
  const items = ["New York", "Portland", "Tokyo", "London", "Paris"];
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
