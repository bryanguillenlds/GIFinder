import { useEffect, useState } from "react";


interface SearchBarProps {
  placeholder: string;
  onSearch: (search: string) => void;
}

export const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {

  const [searchTerm, setSearchTerm] = useState('');

  //* Effects run as soon as the component is mounted and when the dependencies change.
  // Effect should do only one thing.
  useEffect(() => {
    if (!searchTerm.trim()) return;
    // Timeout for debouncing.
    // Debouncing is a technique to prevent a function from being called too often.
    // We want to wait for the user to stop typing for 700ms before calling the function.
    const timeoutId =setTimeout(() => {
      //* This is the effect.
      //* It runs when the dependencies change.
      onSearch(searchTerm);
    }, 700);

    // Cleanup function.
    //* Runs when the component is unmounted or when the dependencies change.
    // "Clean up" means we want to stop doing something when the component is unmounted or when the dependencies change.
    return () => {
      clearTimeout(timeoutId); //* Ideal place to stop doing something when the component is unmounted or when the dependencies change.
    }
  }, [searchTerm, onSearch]); //* These are the dependencies.

  const handleSearch = (): void => {
    if (!searchTerm.trim()) return;
    onSearch(searchTerm);
    setSearchTerm('');
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (!searchTerm.trim()) return;
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}