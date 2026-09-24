
import Search from "../../src/components/For-You/Search";
import Settings from "../../src/components/Player/Settings";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center font-sans">
      <Search />
      <Settings />
      
    </div>
  );
}