import styled from "styled-components";

interface IFilter {
  placeholder?: string;
  filterSetter: (filterValue: string) => void;
}

const FilterContainer = styled.section`
  padding: 8px;
  display: flex;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 12px;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(243 244 246);
`;

const Input = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export function SearchBar(props: IFilter) {
  const { filterSetter, placeholder } = props;

  function filterChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault;
    filterSetter(event.target.value.trim());
  }

  return (
    <FilterContainer>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(event) => filterChangeHandler(event)}
      />
    </FilterContainer>
  );
}
