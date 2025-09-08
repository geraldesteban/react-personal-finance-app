import CaretLeft from "../../assets/icon-caret-right.svg?react";
import CaretRight from "../../assets/icon-caret-left.svg?react";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";
import { useSearchParams } from "react-router-dom";
import { useTransactions } from "./useTransactions";
import { formatCurrency } from "../../utils/formatCurrency";
import { format } from "date-fns";

export default function TransactionsDetails() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "latest";
  const category = searchParams.get("categoryBy") || "alltransactions";
  const search = searchParams.get("search") || "";

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    transactionsData,
    isTransactionsData,
    errorTransactionsData,
    pageCount,
  } = useTransactions(search, sortBy, category, page);

  const firstPage = page === 1;
  const lastPage = page >= pageCount;

  function goToPage(newPage) {
    if (newPage < 1) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    setSearchParams(params);
  }

  if (isTransactionsData) return <Spinner />;

  if (errorTransactionsData)
    return <ErrorMessage errorMessage={errorTransactionsData.message} />;

  return (
    <>
      <div className="mx-5 sm:mx-0">
        <div className="flex justify-between items-center font-myFontRegular text-[12px] text-grey-500 border-b py-5">
          <span className="w-[150px]">Recipient/Sender</span>
          <div className="flex w-[200px] justify-between">
            <span className="w-1/2 sm:w-0 sm:hidden">Category</span>
            <span className="w-1/2 sm:w-0 sm:hidden">Transaction Date</span>
          </div>
          <span className="w-[100px] text-right">Amount</span>
        </div>
        {transactionsData?.map((tsx) => (
          <div
            className="flex justify-between items-center py-5 border-b"
            key={tsx.id}
          >
            <div className="flex items-center w-[150px]">
              <img
                src={tsx.avatar}
                alt={tsx.name}
                className="rounded-full w-[40px] h-[40px] mr-5"
              />
              <span className="font-myFontBold text-grey-900 text-[14px] whitespace-nowrap">
                {tsx.name}
              </span>
            </div>
            <div className="flex w-[200px] justify-between">
              <span className="font-myFontRegular text-[12px] text-grey-500 w-1/2 sm:w-0 sm:hidden">
                {tsx.category}
              </span>
              <span className="font-myFontRegular text-[12px] text-grey-500 w-1/2 sm:w-0 sm:hidden">
                {format(tsx.date, "dd MMM yyyy")}
              </span>
            </div>
            <span
              className={`font-myFontBold text-[12px] w-[100px] text-right ${
                tsx.amount < 0 ? "text-grey-900" : "text-green"
              }`}
            >
              {formatCurrency(tsx.amount)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-10 sm:flex-wrap">
        <button
          className={`group flex items-center px-8 py-4 border border-beige-500 rounded-xl transition duration-500 hover:border-beige-500 hover:bg-beige-500 hover:text-white lg:py-2 lg:px-4 lg:rounded-lg sm:px-[15px] sm:py-[10px]`}
          onClick={() => goToPage(page - 1)}
          disabled={firstPage}
        >
          <CaretRight className="text-grey-500 mr-5 group-hover:text-white sm:mr-0" />
          <span className="font-myFontRegular text-grey-900 text-[14px] sm:hidden">
            Prev
          </span>
        </button>
        <div className="flex mx-2 sm:flex-wrap sm:mx-[2px]">
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              className="text-grey-900 py-2 px-4 border border-beige-500 rounded-lg hover:border-beige-500 hover:text-white hover:bg-beige-500 [&:not(:last-child)]:mr-2 transition duration-500"
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          className={`group flex items-center px-8 py-4 border border-beige-500 rounded-xl transition duration-500 hover:border-beige-500 hover:bg-beige-500 hover:text-white lg:py-2 lg:px-4 lg:rounded-lg sm:px-[15px] sm:py-[10px]`}
          onClick={() => goToPage(page + 1)}
          disabled={lastPage}
        >
          <span className="font-myFontRegular text-grey-900 mr-5 sm:mr-5 sm:hidden">
            Next
          </span>
          <CaretLeft className="text-grey-500 group-hover:text-white" />
        </button>
      </div>
    </>
  );
}

/* 
 <span className="font-myFontRegular text-[14px] sm:hidden"></span>
            <span className="font-myFontRegular text-[14px] hidden sm:block"></span>
*/
