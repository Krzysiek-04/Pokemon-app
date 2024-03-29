import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError("WYSTĄPIŁ BŁĄD! POWÓD: " + err.message);
      }
    }
    getData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
