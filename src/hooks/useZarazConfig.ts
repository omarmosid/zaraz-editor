import { useState, useEffect, useCallback } from "react";
import { ZarazConfig } from "@cloudflare/zaraz-types";
import { useFormStorage } from "./useFormStorage";

export const useZarazConfig = () => {
  const { zoneId, apiKey, isInvalid } = useFormStorage();

  const [config, setConfig] = useState<ZarazConfig | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const ENDPOINT_PROXY = `https://cf-api-proxy.omarmo.workers.dev/${zoneId}`;

  // Fetch the ZarazConfig
  const fetchZarazConfig = useCallback(async () => {
    if (isInvalid) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(ENDPOINT_PROXY, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setConfig(data.result as ZarazConfig);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [ENDPOINT_PROXY, isInvalid, apiKey]);

  // Update the ZarazConfig
  const updateZarazConfig = useCallback(
    async (newConfig: ZarazConfig) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(ENDPOINT_PROXY, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(newConfig),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setConfig(data.result as ZarazConfig);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    [ENDPOINT_PROXY, apiKey]
  );

  useEffect(() => {
    fetchZarazConfig();
  }, [fetchZarazConfig]);

  return { config, loading, error, updateZarazConfig };
};
