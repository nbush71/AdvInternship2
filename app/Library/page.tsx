
import Search from "../../src/components/For-You/Search";
import Library from "../../src/components/Library/Library";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center font-sans">
      <Search />
      <Library />
    </div>
  );
}