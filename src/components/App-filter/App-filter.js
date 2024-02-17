import "./App-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "moreThen100", label: "З/П больше 1000$" },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <div
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </div>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};
export default AppFilter;
