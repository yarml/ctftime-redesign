import Input from "../Input";

export default function PublicInfoPage() {
  return (
    <div className="flex flex-col px-4 gap-6">
      <section className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Contact Information</h1>
        <h2 className="font-semibold text-lg">
          This information can be seen by anyone
        </h2>
      </section>
      <div className="flex flex-row w-full justify-around pb-4">
        <section className="flex flex-col gap-6 justify-stretch items-stretch">
          <div>
            <label htmlFor="usr_discord">Discord</label>
            <Input
              id="usr_discord"
              type="text"
              placeholder="Discord#1234"
              value="y_arml"
            />
          </div>
          <div>
            <label htmlFor="usr_website">Website</label>
            <Input
              id="usr_website"
              type="url"
              placeholder="your-website.com"
              value={"yarml.com"}
            />
          </div>
          <div>
            <label htmlFor="usr_twitter">Twitter</label>
            <Input id="usr_twitter" type="text" placeholder="@twitter-handle" />
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
            <label htmlFor="usr_country">Whatsapp</label>
            <Input
              id="usr_whatsapp"
              type="text"
              placeholder="+ 00 00-(000)00"
            />
          </div>
          <div>
            <label htmlFor="usr_lname">LinkedIn</label>
            <Input
              id="usr_linkedin"
              type="text"
              placeholder="linkedin-profile"
            />
          </div>
          <button className="self-end rounded-xl hover:text-[#e3000b] font-bold text-white transition-colors">
            Save
          </button>
        </section>
      </div>
    </div>
  );
}
