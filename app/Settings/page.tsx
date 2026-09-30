
import SettingsLogin from "@/src/components/Settings/SettingsLogin";
import Search from "../../src/components/For-You/Search";
import SubStatus from "../../src/components/Settings/SubStatus";

export default function Settings() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center font-sans">
      <Search />
      <SettingsLogin />
      <SubStatus />
      
    </div>
  );
}