import { useEffect, useState } from "react";

function App() {
  const [all, setAll] = useState(false);
  const [kosher, setKosher] = useState(false);
  const [noCelery, setNoCelery] = useState(false);
  const [noEgg, setNoEgg] = useState(false);

  useEffect(() => {
    if (all) {
      setKosher(true);
      setNoCelery(true);
      setNoEgg(true);
    }
  });

  const clearAllBtn = () => {
    console.log("cleared");
    setAll(false);
    setKosher(false);
    setNoCelery(false);
    setNoEgg(false);
  };

  return (
    <div className="content-container">
      <header className="header-container">
        <h3>
          Selected: {kosher ? "kosher" : ""} {noCelery ? "no celery" : ""}{" "}
          {noEgg ? "no egg" : ""}{" "}
        </h3>
      </header>

      <div className="selection-container">
        <div>
          <input
            type="checkbox"
            id="select-all"
            name="select-all"
            value="select all"
            checked={all}
            onChange={() => {
              console.log("all", all);
              setAll((prevAll) => !prevAll);
            }}
          />
          <label htmlFor="select-all">Select All</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="kosher"
            name="kosher"
            value="kosher"
            checked={kosher}
            onChange={() => {
              console.log("kosher", kosher);
              setKosher((prevKosher) => !prevKosher);
              setAll(false);
            }}
          />
          <label htmlFor="kosher">Kosher</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="no-celery"
            name="no-celery"
            value="no celery"
            checked={noCelery}
            onChange={() => {
              console.log("no celery", noCelery);
              setNoCelery((prevNoCelery) => !prevNoCelery);
              setAll(false);
            }}
          />
          <label htmlFor="no-celery">No Celery(inc celeriac)</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="no-egg"
            name="no-egg"
            value="no egg"
            checked={noEgg}
            onChange={() => {
              console.log("no egg", noEgg);
              setNoEgg((prevNoEgg) => !prevNoEgg);
              setAll(false);
            }}
          />
          <label htmlFor="no-egg">No Egg</label>
        </div>
      </div>

      <div className="button-container">
        <button className="clear-all-btn" onClick={clearAllBtn}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
