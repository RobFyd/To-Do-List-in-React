import Input, { TasksFormSearch } from "../../Input";
import searchQueryParamName from "../searchQueryParamName";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

interface OnInputChangeProps {
  target: {
    value: string;
  };
}

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }: OnInputChangeProps) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <TasksFormSearch>
      <Input
        margin="0 0 20px"
        placeholder="Filter tasks"
        value={query || ""}
        onChange={onInputChange}
      />
    </TasksFormSearch>
  );
};

export default Search;
