import React from "react";

const sampleData = require("./data.json");

interface catDetails {
  catName: string;
  catDesc: string;
  id: number;
}

function LawCards() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {sampleData.map(({ catName, catDesc, id }: catDetails) => (
              <div key={id} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {catName}
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {catName}
                  </h1>
                  <p className="leading-relaxed mb-3">{catDesc}</p>
                  <a
                    className="text-indigo-500 inline-flex items-center"
                    href={`/rights/${id}`}
                  >
                    Learn More
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
                  </a>
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
