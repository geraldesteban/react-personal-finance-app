import useFetchData from "../../hooks/useFetchData";
import { DATAURL } from "../../utils/constants";
import { formatCurrency } from "../../utils/formatCurrency";
import { getDayOnly } from "../../utils/formatDate";

export function RecurringBills() {
  const { data } = useFetchData(DATAURL);

  /* Recurring Bills Details */
  const recurringBillsDetails = data.transactions
    .map((val) => ({
      billImage: val.avatar,
      billTitle: val.name,
      amount: formatCurrency(Math.abs(val.amount)),
      date: getDayOnly(new Date(val.date)),
      recurring: val.recurring,
    }))
    .filter((rec) => rec.recurring === true);

  /* Formatted Amounts, Date, and Recurring */
  const amountDateRecurring = data.transactions.map((val) => ({
    amount: Math.abs(val.amount),
    date: new Date(val.date).getDate(),
    recurring: val.recurring,
  }));

  /* Recurring Total Bills */
  const total = amountDateRecurring
    .filter((rec) => rec.recurring === true)
    .filter((day) => day.date >= 19 || day.date <= 24)
    .map((val) => val.amount)
    .reduce((acc, curr) => acc + curr, 0);

  /* Recurring Bills Details */
  const recurringData = amountDateRecurring.filter(
    (rec) => rec.recurring === true
  );

  /* Recurring Paid Bills */
  const paidBills = recurringData
    .filter((am) => am.date < 19)
    .map((val) => val.amount)
    .reduce((acc, curr) => acc + curr, 0);

  /* Recurring Paid Bills Length */
  const paidBillsLength = recurringData.filter((am) => am.date < 19).length;

  /* Recurring Total Upcoming */
  const totalUpcoming = recurringData
    .filter((am) => am.date > 19)
    .map((val) => val.amount)
    .reduce((acc, curr) => acc + curr, 0);

  /* Recurring Total Upcoming Length */
  const totalUpcomingLength = recurringData.filter((am) => am.date > 19).length;

  /* Recurring Due Soon */
  const dueSoon = recurringData
    .filter((am) => am.date >= 19 || am.date <= 24)
    .map((val) => val.amount)
    .reduce((acc, curr) => acc + curr, 0);

  /* Recurring Due Soon length */
  const dueSoonLength = recurringData.filter(
    (am) => am.date >= 19 || am.date <= 24
  ).length;

  return {
    data,
    total,
    recurringData,
    paidBills,
    paidBillsLength,
    totalUpcoming,
    totalUpcomingLength,
    dueSoon,
    dueSoonLength,
    recurringBillsDetails,
  };
}
