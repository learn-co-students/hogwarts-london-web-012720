import React from "react";

export default function sort(props) {
  return (
    <div>
      {props.sort === "name" ? (
        <div>
          <button
            onClick={e => {
              props.sortChange();
            }}
            className="btn btn-danger"
          >
            SORT BY NAME
          </button>
          <button disabled className="btn btn-success">
            SORT BY WEIGHT
          </button>
        </div>
      ) : (
        <div>
          <button disabled className="btn btn-danger">
            SORT BY NAME
          </button>
          <button
            onClick={e => {
              props.sortChange();
            }}
            className="btn btn-success"
          >
            SORT BY WEIGHT
          </button>
        </div>
      )}
    </div>
  );
}
