
interface PreviousSearchesProp {
  searches: string[];
  onPreviousSearchClick: (search: string) => void;
}

export const PreviousSearches = ({ searches, onPreviousSearchClick }: PreviousSearchesProp) => {

  return (
    <div className="previous-searches">
      <h2>Previous Searches</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} onClick={() => onPreviousSearchClick(search)}>{search}</li>
        ))}
      </ul>
    </div>
  )
}