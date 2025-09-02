import { useState } from "react";
import { DATAURL } from "../../utils/constants";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import CaretLeft from "../../assets/icon-caret-right.svg?react";
import CaretRight from "../../assets/icon-caret-left.svg?react";
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../../ui/Spinner";

export default function TransactionsDetails() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, loading } = useFetchData(DATAURL);

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

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="mx-5 sm:mx-0">
      <div className="flex justify-between items-center font-myFontRegular text-[12px] text-grey-500 border-b py-5">
        <span className="w-[150px]">Recipient/Sender</span>
        <div className="flex w-[200px] justify-between">
          <span className="w-1/2 sm:w-0 sm:hidden">Category</span>

          <span className="w-1/2 sm:w-0 sm:hidden">Transaction Date</span>
        </div>
        <span className="w-[100px] text-right">Amount</span>
      </div>
      {currentData.map((transaction, id) => (
        <div
          className="flex justify-between items-center py-5 border-b"
          key={id}
        >
          <div className="flex items-center w-[150px]">
            <img
              src={transaction.avatar}
              alt={transaction.name}
              className="rounded-full w-[40px] h-[40px] mr-5"
            />
            <span className="font-myFontBold text-grey-900 text-[14px] whitespace-nowrap">
              {transaction.name}
            </span>
          </div>
          <div className="flex w-[200px] justify-between">
            <span className="font-myFontRegular text-[12px] text-grey-500 w-1/2 sm:w-0 sm:hidden">
              {transaction.category}
            </span>
            <span className="font-myFontRegular text-[12px] text-grey-500 w-1/2 sm:w-0 sm:hidden">
              {formatDate(transaction.date)}
            </span>
          </div>
          <span
            className={`font-myFontBold text-[12px] text-${
              transaction.amount > 0 ? "green" : "grey-900"
            } w-[100px] text-right`}
          >
            {transaction.amount > 0 ? "+" : ""}
            {formatCurrency(transaction.amount, "USD")}
          </span>
        </div>
      ))}
      <div className="flex justify-between items-center mt-10 sm:flex-wrap">
        <button
          className={`group flex items-center px-8 py-4 border border-beige-500 rounded-xl transition duration-500 ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          } hover:border-beige-500 hover:bg-beige-500 hover:text-white lg:py-2 lg:px-4 lg:rounded-lg sm:px-[15px] sm:py-[10px]`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <CaretRight className="text-grey-500 mr-5 group-hover:text-white sm:mr-0" />
          <span className="font-myFontRegular text-grey-900 text-[14px] sm:hidden">
            Prev
          </span>
        </button>
        <div className="flex mx-2 sm:flex-wrap sm:mx-[2px]">
          {[...Array(5)].map((_, i) => (
            <button
              className={`text-grey-900 py-2 px-4 border border-beige-500 rounded-lg hover:border-beige-500 hover:text-white hover:bg-beige-500 [&:not(:last-child)]:mr-2 transition duration-500 ${
                currentPage === i + 1
                  ? "bg-grey-900 text-white border-grey-900"
                  : ""
              } ${i + 1 === 4 ? "sm:hidden" : ""} sm:py-1 sm:px-3`}
              onClick={() => setCurrentPage(i + 1)}
              key={i}
              disabled={i + 1 === 3 && smallScreen}
            >
              {i + 1 === 3 ? (
                <>
                  <span className="font-myFontRegular text-[14px] sm:hidden">
                    {i + 1}
                  </span>
                  <span className="font-myFontRegular text-[14px] hidden sm:block">
                    ...
                  </span>
                </>
              ) : (
                i + 1
              )}
            </button>
          ))}
        </div>
        <button
          className={`group flex items-center px-8 py-4 border border-beige-500 rounded-xl transition duration-500 ${
            currentPage === totalPages ? "cursor-not-allowed" : ""
          } hover:border-beige-500 hover:bg-beige-500 hover:text-white lg:py-2 lg:px-4 lg:rounded-lg sm:px-[15px] sm:py-[10px]`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <span className="font-myFontRegular text-grey-900 mr-5 sm:mr-5 sm:hidden">
            Next
          </span>
          <CaretLeft className="text-grey-500 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
