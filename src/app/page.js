import { IconKey, IconLogout, IconUser } from "@tabler/icons-react";
import UserCard from "@/components/ui/user-card";
import { usersData } from "@/mock/users-data";

export default function UsersPage() {
  const users = usersData;

  return (
    <div className="flex h-screen">
      <div id="nav" className="bg-white w-[280px] border-1 border-black">
        <h1 className="font-bold text-3xl text-center text-black m-3">
          Connect
        </h1>
        <div
          id="list-button"
          className="bg-slate flex flex-col text-white gap-3 m-2 p-1.5"
        >
          <button className="bg-black rounded-lg flex gap-2 p-1.5 place-content-center">
            <IconUser />
            User
          </button>
          <button className="bg-black rounded-lg flex gap-2 p-1.5 place-content-center">
            <IconKey /> Hak Akses
          </button>
          <button className="bg-black rounded-lg flex gap-2 p-1.5 place-content-center">
            <IconLogout /> Logout
          </button>
        </div>
      </div>
      <div id="konten" className="bg-white w-full">
        <div
          id="search-bar"
          className="border-2 border-gray-500 p-4 gap-3 m-3 rounded-lg"
        >
          <h1 className="text-gray-800">Cari....</h1>
        </div>
        {users.map((user, index) => (
          <UserCard
            key={index}
            fullname={user.fullname}
            email={user.email}
            roles={user.roles}
            status={user.status}
          />
        ))}
      </div>
    </div>
  );
}
