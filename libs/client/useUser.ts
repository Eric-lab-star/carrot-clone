import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface IData {
  ok: boolean;
  profile: User;
}

export default function useUser() {
  const { data, error } = useSWR<IData>("/api/users/me");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
  }, [router, data]);

  return { user: data?.profile, isLoading: !data && !error };
}
