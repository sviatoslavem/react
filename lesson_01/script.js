const rootContainer = document.querySelector(`#root`);
const rootContainerReact = ReactDOM.createRoot(rootContainer);

const renderData = (data) => {
  return (
    <ul>
      {Object.entries(data).map(([key, value]) => {
        const isObject = typeof value === "object" && value !== null;
        return (
          <li key={key}>
            <strong>{key}:</strong>
            {isObject ? renderData(value) : ` ${value}`}
          </li>
        );
      })}
    </ul>
  );
};

rootContainerReact.render(
  <div>
    <h1>Список користувачів</h1>
    {users.map((user) => {
      return (
        <div key={user.id}>
          <h2>Користувач ID: {user.id}</h2>
          {renderData(user)}
        </div>
      );
    })}
  </div>
);
