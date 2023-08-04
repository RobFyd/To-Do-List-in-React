import Input, { TasksFormSearch } from "../../Input";
import searchQueryParamName from "../searchQueryParamName";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
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
