import Link from "next/link";
import Input from "../profile/Input";

export default function ContactPage() {
  return (
    <main className="max-w-screen-xl w-full h-full flex flex-row items-stretch justify-between mx-auto px-4 pt-14 pb-12 gap-10">
      <section className="flex flex-col items-start w-1/2 p-2">
        <h1 className="text-4xl font-bold">Feedback</h1>
        <h2>Are you facing an issue with CTF Time? Please let us know.</h2>
        <form className="flex flex-col gap-4 pt-8 px-8 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-lg">Feedback Type</label>
            <select className="transition-all text-sm rounded-lg outline-none block w-full p-2.5 bg-stone-700 focus:bg-stone-600 focus:scale-105 placeholder-gray-400">
              <option>Bug</option>
              <option>Feature Request</option>
              <option>Team Membership</option>
              <option>Task Details</option>
              <option>Team Merge Problems</option>
              <option>Personal Data Deletion (GDPR)</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-lg">Message</label>
            <textarea placeholder="Write a message describing your problem/request..." className="transition-all text-sm rounded-lg outline-none block w-full p-2.5 bg-stone-700 focus:bg-stone-600 focus:scale-105 placeholder-gray-400 min-h-[300px]" />
          </div>
          <div className="flex flex-row justify-end items-end font-bold">
            <button className="hover:text-[#e3000b] transition-all">
              Send Feedback
            </button>
          </div>
        </form>
      </section>
      <div className="min-w-[2px] bg-white" />
      <section className="flex flex-col items-start w-1/2 p-2">
        <h1 className="text-4xl font-bold">For CTF Organizers</h1>
        <h2>Do you want to organize a CTF? Please Fill the form below.</h2>
        <form className="flex flex-col gap-4 pt-8 px-8 w-full">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-lg">CTF Name</label>
            <Input id="ctf_name" placeholder="CTF Name" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-lg">Organizer</label>
            <Input id="ctf_name" placeholder="Organizer" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-lg">URL</label>
            <Input id="ctf_name" placeholder="example.com" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-lg">Description</label>
            <textarea placeholder="Write a description for the CTF..." className="transition-all text-sm rounded-lg outline-none block w-full p-2.5 bg-stone-700 focus:bg-stone-600 focus:scale-105 placeholder-gray-400 min-h-[300px]" />
          </div>
          <p>
            Please read our{" "}
            <Link href="/guidelines" className="text-[#e3000b] underline">
              Guidelines
            </Link>{" "}
            before submitting a CTF for request.
          </p>
          <div className="flex flex-row justify-end items-end font-bold">
            <button className="hover:text-[#e3000b] transition-all">
              Send Request
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
