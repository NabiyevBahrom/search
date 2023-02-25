import React, { useState } from "react";
import data from "./data";
const Search = () => {
    const [filter, setFilter] = useState("");

    const searchText = (event) => {
        setFilter(event.target.value);
    };
    let dataSearch = data.cardData.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toString().toLowerCase())
        );
    });
    return (
        <div className="container">
            <div className="box2">
                <h1>Countries</h1>
                <input
                    type="text"
                    value={filter}
                    placeholder="Search by country code...................................................................................."
                    onChange={searchText.bind(this)}
                />
            </div>
            <div>
                <div className="box">
                    {dataSearch.map((item, index) => {
                        return (
                            <div className="nox">
                                <div className="nox1">
                                    <img src={item.emoji} />
                                    <div className="nox3">
                                        <h2>{item.name}</h2>
                                        <p>{item.capital}</p>
                                    </div>
                                    <h5>{item.continent}</h5>
                                </div>
                                <div className="nox2">
                                    <h5>
                                        <img src="https://img.icons8.com/external-filled-outline-perfect-kalash/36/null/external-call-healthcare-and-medicine-filled-outline-perfect-kalash.png" />
                                        +{item.phone}
                                    </h5>
                                    <h5>
                                        <img src="https://img.icons8.com/color/36/null/currency-exchange.png" />
                                        {item.code}
                                    </h5>
                                    <h6>
                                        <img src="https://img.icons8.com/glyph-neue/36/null/voice-presentation.png" />
                                        {item.languages}
                                    </h6>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Search;
