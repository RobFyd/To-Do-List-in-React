import { useLocation, useHistory } from "react-router-dom";
import Input, { TasksFormSearch } from "../../Input";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <TasksFormSearch>
      <Input
        margin
        placeholder="Filter tasks"
        value={query || ""}
        onChange={onInputChange}
      />
    </TasksFormSearch>
  );
};

export default Search;
