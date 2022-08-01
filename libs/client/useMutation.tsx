import { useState } from "react";

interface IMutationState {
  data?: object;
  error?: object;
  loading: boolean;
}
type useMutationType = [(data: any) => void, IMutationState];

export default function useMutation(url: string): useMutationType {
  const [data, setData] = useState<undefined | any>(undefined);
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
