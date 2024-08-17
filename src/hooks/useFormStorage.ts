import { isFalsy } from "@/utils/helpers";
import { useLocalStorage } from "usehooks-ts";

export const ZONE_ID = "zoneId";
export const API_KEY = "apiKey";

export const useFormStorage = () => {
  const [zoneId, setZoneId] = useLocalStorage(ZONE_ID, "", {
    initializeWithValue: false,
  });
  const [apiKey, setApiKey] = useLocalStorage(API_KEY, "", {
    initializeWithValue: false,
  });

  const setValue = (key: typeof ZONE_ID | typeof API_KEY, value: string) => {
    if (key === "zoneId") setZoneId(value);
    if (key === "apiKey") setApiKey(value);
  };

  const isInvalid = isFalsy(zoneId) || isFalsy(apiKey);

  return {
    zoneId,
    apiKey,
    setValue,
    isInvalid,
  };
};
