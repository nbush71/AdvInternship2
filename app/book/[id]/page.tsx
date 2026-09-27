import Search from "../../../src/components/For-You/Search";
import Sidebar from "../../../src/components/For-You/Sidebar";
import InsideBook from "../../../src/components/InsideBook/InsideBook";

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-2">
        <Search />
        <div className="flex w-full pl-8">
          <InsideBook />
        </div>
      </main>
    </div>
  );
}