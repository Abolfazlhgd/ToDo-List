import React from "react";

function Layout({children}) {
  return (
    <>
      <div className="flex items-center justify-center mt-5 col-12">
        <div className="w-3/4 lg:w-1/2 border p-5 flex flex-col bg-sky-600/80">
          <div className="card">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
