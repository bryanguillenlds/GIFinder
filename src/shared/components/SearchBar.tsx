import { useState } from "react";


interface SearchBarProps {
  placeholder: string;
  onSearch: (search: string) => void;
}

export const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {

  const [search, setSearch] = useState('');

  const handleSearch = (): void => {
    onSearch(search);
    setSearch('');
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}