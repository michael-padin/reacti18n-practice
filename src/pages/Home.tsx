import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div className="w-full h-[calc(100vh-90px)] flex items-center bg-slate-300">
      <div className="max-w-[1440px] m-auto flex items-center justify-center">
        <div className = "py-20 lg:w-[70%] bg-white rounded-lg ">
          <div className="flex items-center justify-center text-5xl mb-[5rem]">
            <h1>{t("home")}</h1>
          </div>
          <div className="flex px-10 lg:px-20 text-xl">
            <p>{t("paragraph")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
