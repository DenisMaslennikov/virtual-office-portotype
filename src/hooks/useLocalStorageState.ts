import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useLocalStorageState<T>(
  initialState: T,
  key: string,
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>((): T => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    () => localStorage.setItem(key, JSON.stringify(state)),
    [state, key],
  );

  return [state, setState];
}
