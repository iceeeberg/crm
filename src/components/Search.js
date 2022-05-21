import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = () => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search Client.."
      />
      <Button variant="warning">
        Search
      </Button>
    </InputGroup>
  );
};

export default Search;
