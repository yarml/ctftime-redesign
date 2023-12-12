import { HTMLInputTypeAttribute } from "react";

export default function MainProfilePage() {
  return (
    <div className="flex flex-row w-full justify-around">
      <section className="flex flex-col gap-6 px-4 justify-stretch items-stretch">
        <div>
          <label htmlFor="usr_username">Username</label>
          <Input
            id="usr_username"
            type="text"
            placeholder="Username"
            value={"Yarml"}
          />
        </div>
        <div>
          <label htmlFor="usr_fname">First Name</label>
          <Input
            id="usr_fname"
            type="text"
            placeholder="First Name"
            value={"Youssef"}
          />
        </div>
        <div>
          <label htmlFor="usr_lname">Last Name</label>
          <Input id="usr_lname" type="text" placeholder="Last Name" />
        </div>
      </section>
      <section className="flex flex-col gap-6 px-4 justify-stretch items-stretch">
        <div>
          <label htmlFor="usr_username">Email</label>
          <Input
            id="usr_email"
            type="email"
            placeholder="example@ctftime.com"
            value={"yarml@smth.ma"}
          />
        </div>
        <div>
          <label htmlFor="usr_country">Country</label>
          <Input
            id="usr_fname"
            type="text"
            placeholder="Country"
            value={"Morocco"}
          />
        </div>
        <div>
          <label htmlFor="usr_lname">Last Name</label>
          <Input id="usr_lname" type="text" placeholder="Last Name" />
        </div>
        <button className="self-end rounded-xl hover:text-[#e3000b] font-bold text-white transition-colors">
          Save
        </button>
      </section>
    </div>
  );
}

function Input({
  id,
  type,
  placeholder,
  value,
}: {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value?: string | number | readonly string[] | undefined;
}) {
  return (
    <input
      id={id}
      type={type}
      className="transition-all text-sm rounded-lg outline-none block w-full p-2.5 bg-stone-700 focus:bg-stone-600 focus:scale-105 placeholder-gray-400"
      placeholder={placeholder}
      value={value}
      required
    />
  );
}
