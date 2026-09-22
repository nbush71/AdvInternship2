import Search from "../../src/components/For-You/Search";
import InsideBook from "../../src/components/InsideBook/InsideBook";

export default function Page() {
   return (
      <div className="grid min-h-screen grid-cols-1 items-center justify-center font-sans">
         <Search />
         <div className="flex w-full pl-8">
            <InsideBook />
         </div>
      </div>
   );
}
