import { useEffect, useRef, useState } from "react";

export const useFetchWithAbort = (cb, controller) => {
  const [isAbortError, setIsAbortError] = useState(false);

  useEffect(() => {
    const fetchWithAbort = async () => {
      try {
        if (controller.current) {
          controller.current?.abort();
        }

        controller.current = new AbortController();
        await cb(controller);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setIsAbortError(true);
        }
      }

      return () => {
        controller.current?.abort();
      };
    };

    fetchWithAbort();
  }, [controller]);
};
