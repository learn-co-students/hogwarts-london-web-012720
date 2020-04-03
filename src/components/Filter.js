import React from "react";

export default function Filter(props) {
  return (
    <div>
      {!props.filter ? (
        <div>
          <button disabled className="btn btn-danger">
            FILTER OFF
          </button>
          <button onClick={props.handleClick} className="btn btn-success">
            FILTER ON
          </button>
        </div>
      ) : (
        <div>
          <button onClick={props.handleClick} className="btn btn-danger">
            FILTER OFF
          </button>
          <button disabled className="btn btn-success">
            FILTER ON
          </button>
        </div>
      )}
    </div>
  );
}
