import { useState } from "react";

interface IMutationState<T> {
  data?: T;
  error?: object;
  loading: boolean;
}
type useMutationType<T> = [(data: any) => void, IMutationState<T>];

export default function useMutation<T>(url: string): useMutationType<T> {
  const [data, setData] = useState<undefined | T>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  const [loading, setLoading] = useState(false);
  function mutate(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(setError)
      .finally(() => setLoading(false));
    return;
  }
  return [mutate, { data, error, loading }];
}
