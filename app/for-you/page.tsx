
import Search from "../../src/components/For-You/Search";
import SelectedBook from "../../src/components/For-You/SelectedBook";
import RecommendedBooks from "../../src/components/For-You/RecommendedBooks";
 
export default function ForYou() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center font-sans">
      <Search />
      <SelectedBook />
      <RecommendedBooks />
    </div>
  );
}