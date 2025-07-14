export default function UserCard({fullname, email, roles, status}) {
  return (
    <div
      id="user-card"
      className="border-2 border-black rounded-lg p-2 flex justify-between items-center gap-2 m-3"
    >
      <div>
        <h2 className="text-[18px] font-bold mb-[1px] text-slate-900">
          {fullname}
        </h2>
        <p className="text-base text-[12px] text-black mb-2">
          {email}
        </p>
        <span className="bg-black text-white text-[11px] px-[9px] py-[5px] rounded mr-[6px]">
          {roles}
        </span>
      </div>
      <span className="bold-text status text-[22px] font-bold m-2">{status}</span>
    </div>
  );
}