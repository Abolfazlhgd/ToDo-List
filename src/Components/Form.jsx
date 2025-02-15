import React from "react";

function Form({todo , change}) {
  return (
    <>
      <form>
        <div className="form-Group flex flex-row mt-3 justify-between">
          <div className="w-3/4">
            <input 
            value={todo}
            onChange={change}
            className="text-center p-1 rounded-sm w-full" type="text" placeholder="Enter your task" />
          </div>
          <div>
            <button type="submit" className="text-white border p-1 px-2 rounded-sm shadow-sm hover:shadow-lg hover:bg-green-800 transition-all ease-in bg-green-700 " >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
