
"use client";

import SettingsLogin from "@/src/components/Settings/SettingsLogin";
import SubStatus from "@/src/components/Settings/SubStatus";
import Search from "../../src/components/For-You/Search";
import { useAuth } from "@/src/AuthContext";

export default function Settings() {
  const { user } = useAuth();

  return (
    <>
    <Search />
    {user ? <SubStatus /> : <SettingsLogin  />}
    </>
  );
}