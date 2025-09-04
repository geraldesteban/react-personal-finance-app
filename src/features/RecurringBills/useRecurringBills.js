import { format } from "date-fns";
import { useTransactions } from "../Transactions/useTransactions";

export function useRecurringBills() {
  const { transactionsData, isTransactionsData, errorTransactionsData } =
    useTransactions();

  /* Months used based on the given data */
  const august = "8";
  const july = "7";

  /* Day value for all Upcoming and Due Soon Bills*/
  const allUpcoming = "31";
  const dueSoon = "23";

  /* Return Transactions by Recurring and Remove Duplicate Names */
  const RecurringDuplicate = transactionsData
    ?.filter((tsx) => tsx.recurring === true)
    .filter(
      (tsx, index, self) => index === self.findIndex((s) => s.name == tsx.name)
    );

  /* Get Paid Bills */
  const paidBills = RecurringDuplicate?.filter(
    (tsx) => format(tsx.date, "M") === august
  ).map((tsx) => Math.abs(tsx.amount));

  /* Get All Upcoming Bills */
  const upcomingBills = RecurringDuplicate?.filter(
    (tsx) => format(tsx.date, "M") === july
  )
    .filter(
      (tsx) =>
        format(new Date(tsx.date), "d") >= "19" &&
        format(new Date(tsx.date), "d") <= allUpcoming
    )
    .map((tsx) => Math.abs(tsx.amount));

  /* Get Duesoon Bills */
  const dueSoonBills = RecurringDuplicate?.filter(
    (tsx) => format(tsx.date, "M") === july
  )
    .filter(
      (tsx) =>
        format(new Date(tsx.date), "d") >= "19" &&
        format(new Date(tsx.date), "d") <= dueSoon
    )
    .map((tsx) => Math.abs(tsx.amount));

  /* Paid Bills */
  const numberPaidBills = paidBills?.length;
  const totalPaidbills = paidBills?.reduce((acc, curr) => acc + curr, 0);

  /* Upcoming Bills */
  const numberUpcomingBills = upcomingBills?.length;
  const totalUpcomingBills = upcomingBills?.reduce(
    (acc, curr) => acc + curr,
    0
  );

  /* Duesoon Bills */
  const numberDueSoonBills = dueSoonBills?.length;
  const totalDueSoonBills = dueSoonBills?.reduce((acc, curr) => acc + curr, 0);

  /* Total Bills */
  const totalBills = totalPaidbills + totalUpcomingBills + totalDueSoonBills;

  return {
    numberPaidBills,
    numberUpcomingBills,
    numberDueSoonBills,
    totalPaidbills,
    totalUpcomingBills,
    totalDueSoonBills,
    totalBills,
    isTransactionsData,
    errorTransactionsData,
  };
}
