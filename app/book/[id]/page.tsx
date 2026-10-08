import Search from "../../../src/components/For-You/Search";
import { SidebarLayout } from "../../../src/components/For-You/Sidebar";
import InsideBook from "../../../src/components/InsideBook/InsideBook";

export default function Page() {
  return (
    <SidebarLayout>
      <Search />
      <div className="flex w-full pl-8">
        <InsideBook />
      </div>
    </SidebarLayout>
  );
}