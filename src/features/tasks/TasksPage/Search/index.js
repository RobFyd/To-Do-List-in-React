import { useLocation, useHistory } from "react-router-dom";
import Input, { TasksFormSearch } from "../../Input";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("search");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <TasksFormSearch>
      <Input
        placeholder="Filter tasks"
        value={query || ""}
        onChange={onInputChange}
      />
    </TasksFormSearch>
  );
};
