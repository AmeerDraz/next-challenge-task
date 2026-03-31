import { useCallback, useEffect, useState } from "react";

/**
 * @param url - The URL to fetch data from.
 * @param options - Optional fetch options.
 */


interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string, options?: RequestInit) {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });


const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
        const response = await fetch(url, options);
        
        if(!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        
        }

        const data = await response.json();
        setState({ data, loading: false, error: null });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        setState({ data: null, loading: false, error: message });

    }
}, [url]);

useEffect(() => {
    fetchData();
}, [fetchData]);

return { ...state, refetch: fetchData };

}