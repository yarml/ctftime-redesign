import { HTMLInputTypeAttribute } from "react";
import Input from "./Input";

export default function MainProfilePage() {
  return (
    <div className="flex flex-col px-4 gap-6">
      <section className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">General Information</h1>
        <h2 className="font-semibold text-lg">
          This information can only be seen when requested
        </h2>
      </section>
      <div className="flex flex-row w-full justify-around pb-4">
        <section className="flex flex-col gap-6 justify-stretch items-stretch">
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
    </div>
  );
}
