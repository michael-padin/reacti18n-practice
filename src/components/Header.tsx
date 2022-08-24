import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useEffect} from "react";

const Header = () => {
  const { i18n, t } = useTranslation(["common", "home"]);
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const App = document.getElementsByTagName("body")[0];

    i18n.changeLanguage(value);
    localStorage.setItem("i18nextLng", value);

    App.style.direction = value === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    const getLang = localStorage.getItem("i18nextLng") || "";
    if (getLang?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  return (
    <nav className="bg-gray-700 w-full">
      <div className="max-w-[1440px] m-auto flex justify-between px-10 py-5">
        <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
          <Link to="/">
            <span>{t("logo")}</span>
          </Link>
        </div>
        <div className="flex items-center gap-6 text-white text-xl font-semibold">
          <div>
            <Link to="/">
              <span>{t("home")}</span>
            </Link>
          </div>
          <div>
            <Link to="/profile">
              <span>{t("profile")}</span>
            </Link>
          </div>
          <div>
            <select
              value={localStorage.getItem("i18nextLng") || ""}
              className="outline-none rounded-md border-none bg-gray-400 p-2 appearance-none"
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="fr">Español</option>
              <option value="es">Spanish</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
