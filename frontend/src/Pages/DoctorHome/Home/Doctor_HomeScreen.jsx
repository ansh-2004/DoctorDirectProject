import React from "react";
import Brands from "../../../Components/Home/Brands/Brands";
import Latest_News from "../../../Components/Home/Latest_News/Latest_News";
import Book_Appointement_Doc from "../../../Components/Doctor_UI/Home/Book_Appointement_Doc";
import Special_Services from "../../../Components/Home/Special Services/Special_Services";

const Doctor_HomeScreen = () => {
  return (
    <div>
      <Book_Appointement_Doc />
      <Brands />
      <Special_Services/>
      <Latest_News />
    </div>
  );
};

export default Doctor_HomeScreen;
