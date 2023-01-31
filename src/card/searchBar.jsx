import React, { useState } from "react";
import { allData } from "../data";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = allData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div
      className="searchBar position-absolute w-100 px-5 border-top border-bottom"
      style={{ zIndex: "2", height: "auto" }}
    >
      <div
        className="d-flex align-items-center p-3 gap-3"
        style={{ height: "8rem" }}
      >
        <ion-icon name="search-outline"></ion-icon>
        <input
          className="w-100 fs-2 px-3"
          placeholder="Search"
          style={{ height: "4rem", outline: "none", border: "none" }}
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          onClick={() => props.setIsVisibleSearch(!props.isVisibleSearch)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      {searchTerm ? (
        <div
          className="search-items-container d-flex gap-3"
          style={{ display: "block", height: "40rem" }}
        >
          {filteredData.slice(0, 2).map((val, key) => {
            return (
              <a className="text-dark" key={key} href={val.url}>
                <div>
                  <h1>{val.length}</h1>

                  <div
                    className="search-item p-4"
                    style={{ height: "25rem", width: "22rem" }}
                  >
                    <img
                      className="img-fluid"
                      src={val.img}
                      alt="sneakers"
                      style={{ height: "inherit", width: "inherit" }}
                    />

                    <div className="searchItemInfo">
                      <h2 className="fs-3 fw-light text-center mt-4">
                        {val.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="search-type container d-none"></div>
      )}
    </div>
  );
};

export default SearchBar;
