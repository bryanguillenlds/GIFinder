

interface SearchBarProps {
  placeholder: string;
}

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>Search</button>
    </div>
  )
}