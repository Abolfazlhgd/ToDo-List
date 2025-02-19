import React from "react";

function Form({ todo, change, submit, error }) {
  return (
    <>
      <form onSubmit={submit}>
        <div className="form-Group flex flex-row mt-3 justify-between">
          <div className="w-3/4">
            <input
              value={todo}
              onChange={change}
              className="text-center p-1 rounded-md w-full"
              type="text"
              placeholder="Enter your task"
            />
            {error && (
              <div className="flex p-1">
                <span className="text-red-900 font-semibold text-xs">
                  {error}
                </span>
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="text-white border p-1 px-2 rounded-md shadow-sm hover:shadow-lg hover:bg-green-800 transition-all ease-in bg-green-700 "
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
