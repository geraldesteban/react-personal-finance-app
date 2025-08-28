import { useEffect, useState } from "react";

function useFetchData(url) {
  const [data, setData] = useState({
    balance: {
      current: 0,
      income: 0,
      expenses: 0,
    },
    transactions: [],
    budgets: [],
    pots: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const sampleData = await res.json();
        setData(sampleData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
