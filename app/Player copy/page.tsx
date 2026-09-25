
import Search from "../../src/components/For-You/Search";
import Settings from "../../src/components/Settings/SettingsLogin";
import Player from "../../src/components/Player/Player";
import BookSummary from "../../src/components/Player/BookSummary";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center font-sans">
      <Search />
      {/* <Settings />
       */}
      <BookSummary />
      <Player />
    </div>
  );
}