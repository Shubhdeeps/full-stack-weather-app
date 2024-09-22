import { useState } from "react";
import { GeoCodeModel } from "../models/GeoCoding.model";
import { useAtom } from "jotai";
import { currentGeolocationAtom } from "../utils/store";
import axios from "axios";

const baseURL = "http://localhost:8080";
export function useGeoCodingFetch() {
  const [geoCodeList, setGeoCodeList] = useState<GeoCodeModel[]>([]);
  const [geoCode, setGeoCode] = useAtom(currentGeolocationAtom);

  async function fetchGeoCoding(text: string) {
    const response = await axios.post(`${baseURL}/geo-coding`, {
      "search-text": text,
    });

    setGeoCodeList(response.data || []);
  }

  function selectGeoCode(selectedGeoCode: GeoCodeModel) {
    setGeoCode(selectedGeoCode);
    setGeoCodeList([]);
  }

  return { fetchGeoCoding, geoCodeList, selectGeoCode, geoCode } as const;
}
