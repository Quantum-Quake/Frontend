import Link from "next/link";
import { useEffect, useState, useContext } from "react";

import { Language } from "@/enums/language";
import { LanguageContext } from "@/context/LanguageContext";
import { English } from "@/constants/englishData";
import { Hindi } from "@/constants/hindiData";
import { Marathi } from "@/constants/marathiData";
import localfont from "next/font/local";

const sfmedium = localfont({
  src: "../public/fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-sfmedium",
});

interface catDetails {
  catName: string;
  catDesc: string;
  id: number;
}

function LawCards() {
  const { language } = useContext(LanguageContext); // Get the language state from the context
  const [defaultValue, setDefaultValue] = useState(English);
  const [learnMore, setLearnMore] = useState("");

  useEffect(() => {
    // console.log(language.values().next().value);
    async function temp() {
      if (language.values().next().value === Language.hindi) {
        // console.log("HINDI SECTION");
        setDefaultValue(Hindi);
        setLearnMore("और जानें");
      } else if (language.values().next().value === Language.english) {
        // console.log("ENGLISH SECTION");
        setDefaultValue(English);
        setLearnMore("Learn More");
      } else if (language.values().next().value === Language.marathi) {
        // console.log("MARATHI SECTION");
        setDefaultValue(Marathi);
        setLearnMore("अधिक जाणून घ्या");
      }
    }
    temp();
  }, [language]);

  return (
    <div className="opacity-100 bg-white">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* <p>{defaultValue[0].catDesc}</p> */}
          <div className="flex flex-wrap -m-4">
            {defaultValue.map(({ catName, catDesc, id }: catDetails) => (
              <div key={id} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {catName}
                  </h1>

                  <p className={`leading-relaxed mb-3 ${sfmedium.className}`}>
                    {catDesc}
                  </p>

                  <Link
                    href={`/rights/${id}`}
                    className="text-maroon inline-flex items-center"
                  >
                    {learnMore}
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LawCards;
