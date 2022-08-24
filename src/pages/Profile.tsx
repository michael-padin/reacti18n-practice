import { useTranslation } from "react-i18next";
import { useState } from "react";

interface IFormData {
  name: string;
  age: number | null;
  email: string;
}

const Profile = () => {
  const { t } = useTranslation(["profile", "common"]);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    age: null,
    email: "",
  });
  const handleChange = (e: React.BaseSyntheticEvent) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ ...formData });
  };

  return (
    <div className="w-full sm:h-auto h-[calc(100vh-90px)] bg-slate-200 flex items-center">
      <div className="m-auto p-10 bg-white lg:max-w-[500px] rounded-md">
        <h1 className="text-center text-2xl font-semibold">{t("profile")}</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap w-full gap-4 ">
            <div className="flex flex-col justify-start  w-full ">
              <label htmlFor="profileName ">{t("name")}</label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                id="profileName"
                className="w-full p-3 outline-none border-[1px] border-bg-slate-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start  w-full ">
              <label htmlFor="profileAge ">{t("age")} </label>
              <input
                onChange={handleChange}
                name="age"
                type="number"
                id="profileAge"
                className="w-full p-3 outline-none border-[1px] border-bg-slate-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start  w-full ">
              <label htmlFor="profileEmail">{t("email")} </label>
              <input
                onChange={handleChange}
                name="email"
                id="profileEmail"
                type="email"
                className="w-full p-3 outline-none border-[1px] border-bg-slate-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start w-full   mt-5">
              <button
                type="submit"
                className="bg-gray-700 flex items-center justify-center text-white px-10 py-4 rounded-lg w-[50%] sm:w-full"
              >
                {t("common:submit")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
