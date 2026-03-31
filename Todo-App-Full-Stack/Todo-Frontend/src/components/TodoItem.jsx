function TodoItem({
  key,
  id,
  todoName,
  todoDate,
  onDeleteClick,
  onCompletedClick,
}) {
  return (
    <div className="container" key={key}>
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4 ">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary kg-button"
            onClick={() => onCompletedClick(id)}
          >
            Completed
          </button>
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
