import data from "../../data/data.json";
import CaretLeft from "../../assets/icon-caret-right.svg?react";
import CaretRight from "../../assets/icon-caret-left.svg?react";
import { useState } from "react";

export default function TransactionsDetails() {
  const [currentPage, setCurrentPage] = useState(1);
  const transactions = data.transactions;
  const dataPerPage = 10;

  const lastData = currentPage * dataPerPage;
  const firstData = lastData - dataPerPage;
  const currentData = transactions.slice(firstData, lastData);

  const totalPages = Math.ceil(transactions.length / dataPerPage);

  const smallScreen = window.innerWidth <= 639;

  function nextPage() {
    setCurrentPage((curPage) => curPage + 1);
  }

  function prevPage() {
    setCurrentPage((curPage) => curPage - 1);
  }

  return (
    <div className="mx-5">
      <div className="flex justify-between items-center text-grey-500 text-[12px] font-semibold border-b pb-2">
        <span className="w-[150px]">Recipient/Sender</span>
        <div className="flex w-[200px] justify-between">
          <span className="w-1/2 sm:w-0 sm:hidden">Category</span>
          <span className="w-1/2 sm:w-0 sm:hidden">Transaction Date</span>
        </div>
        <span className="w-[100px] text-right">Amount</span>
      </div>
      {currentData.map((transaction, id) => (
        <div
          className="flex justify-between items-center text-grey-500 text-[12px] py-5 border-b"
          key={id}
        >
          <div className="flex items-center w-[150px]">
            <img
              src={transaction.avatar}
              alt={transaction.name}
              className="rounded-full w-[40px] h-[40px] mr-5"
            />
            <span className="text-grey-900 text-[14px] font-bold whitespace-nowrap">
              {transaction.name}
            </span>
            <h2></h2>
          </div>
          <div className="flex w-[200px] justify-between">
            <span className="w-1/2 sm:w-0 sm:hidden">
              {transaction.category}
            </span>
            <span className="w-1/2 sm:w-0 sm:hidden">{transaction.date}</span>
          </div>
          <span className="w-[100px] text-right">{transaction.amount}</span>
        </div>
      ))}
      <div className="flex justify-between items-center mt-10">
        <button
          className={`group text-grey-900 flex items-center px-8 py-4 border border-beige-500 rounded-xl transition duration-500 ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          } hover:border-beige-500 hover:bg-beige-500 hover:text-white sm:px-5`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <CaretRight className="text-grey-500 mr-5 group-hover:text-white sm:mr-0" />
          <span className="text-[14px] sm:hidden">Prev</span>
        </button>
        <div className="flex mx-2">
          {[...Array(5)].map((_, i) => (
            <button
              className={`text-grey-900 py-2 px-4 border border-beige-500 rounded-lg hover:border-beige-500 hover:text-white hover:bg-beige-500 [&:not(:last-child)]:mr-2 transition duration-500 ${
                currentPage === i + 1
                  ? "bg-grey-900 text-white border-grey-900"
                  : ""
              } ${i + 1 === 4 ? "sm:hidden" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
              key={i}
              disabled={i + 1 === 3 && smallScreen}
            >
              {i + 1 === 3 ? (
                <>
                  <span className="sm:hidden">{i + 1}</span>
                  <span className="hidden sm:block">...</span>
                </>
              ) : (
                i + 1
              )}
            </button>
          ))}
        </div>
        <button
          className={`group text-grey-900 flex items-center px-8 py-4 border border-beige-500 rounded-xl transition duration-500 ${
            currentPage === totalPages ? "cursor-not-allowed" : ""
          } hover:border-beige-500 hover:bg-beige-500 hover:text-white sm:px-5`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <span className="mr-5 sm:mr-5 sm:hidden">Next</span>
          <CaretLeft className="text-grey-500 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
