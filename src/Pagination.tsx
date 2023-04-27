import React, { Component } from "react";
import { Pagination } from "flowbite-react";

function Page() {
  const onPageChange = () => {};
  return (
    <div className="fixed bottom-0 w-full flex justify-center">
      <Pagination
        currentPage={1}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Page;
