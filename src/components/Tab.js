import React, { useState } from "react";

const Tab = () => {
  const [currentTab, setCurrentTab] = useState();

  const tabs = [
    { id: 1, tabTitle: "Tab 1", title: "Title 1", content: "a" },
    { id: 2, tabTitle: "Tab 2", title: "Title 2", content: "b" },
    { id: 3, tabTitle: "Tab 3", title: "Title 3", content: "c" },
  ];

  const handleOnclick = (e) => {
    setCurrentTab(e.target.id);
  };
  console.log(currentTab);

  return (
    <>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleOnclick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div key={tab.id}>
            {currentTab === `${tab.id}` && (
              <>
                <p>{tab.title}</p> <p>{tab.content}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tab;
