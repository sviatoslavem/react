import React from "react";
import { useParams, useLoaderData } from "react-router";

const CountryItemList = () => {
  const data = useLoaderData();

  const country = Array.isArray(data) ? data[0] : data;

  const renderData = (data) => {
    if (!data) return null;

    return (
      <ul style={{ marginLeft: "20px", marginTop: "5px" }}>
        {Object.entries(data).map(([key, value]) => {
          const isObject = typeof value === "object" && value !== null;

          return (
            <li key={key} style={{ marginBottom: "5px" }}>
              <strong>{key}:</strong>

              {isObject ? renderData(value) : <span> {String(value)}</span>}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {country ? (
        <div style={{ padding: "20px" }}>
          <h2>{country.name?.common || "Country Details"}</h2>
          {renderData(country)}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CountryItemList;
