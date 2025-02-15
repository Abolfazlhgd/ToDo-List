import React from "react";

function ListItem({ title , delHandler , addHandler }) {
  return (
    <div>
      <ul>
        <li className="ListGroupItem flex justify-between p-1 mt-3 space-x-7 border-b">
          <p className="text-white font-semibold font-mono p-1">
            {title}
          </p>
          <div className="flex space-x-2">
            <button onClick={addHandler} className="text-white border p-1 px-2 bg-green-700 rounded-md shadow-sm hover:shadow-lg hover:bg-green-800 transition-all ease-in">
              <i className="fas fa-check"></i>
            </button>
            <button onClick={delHandler} className="text-white border p-1 px-2 bg-red-600/85 rounded-md shadow-sm hover:shadow-lg hover:bg-red-600 transition-all ease-in">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ListItem;
