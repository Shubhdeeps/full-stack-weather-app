import { useEffect, useState } from "react";
import BaseCardWrapper from "./BaseCardWrapper";
import { useDebounce } from "../../hooks/useDebounce";
import { useGeoCodingFetch } from "../../hooks/useGeoCodingFetch";

export default function GeoCodedCard() {
  const [searchText, setText] = useState("");
  const [debouncedText] = useDebounce(searchText);
  const { fetchGeoCoding, geoCodeList, selectGeoCode } = useGeoCodingFetch();
  useEffect(() => {
    if (debouncedText) {
      console.log("fetching");

      fetchGeoCoding(debouncedText);
    }
  }, [debouncedText]);

  return (
    <BaseCardWrapper className="w-[340px] h-full" pattern="patternCyan">
      <div>
        <input
          className="outline-none bg-transparent outline-gray-500 rounded-lg px-2"
          value={searchText}
          placeholder="Search location"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="h-[135px] my-2 overflow-y-scroll scroll-bar">
          <div className="flex flex-col gap-1 h-fit">
            {geoCodeList.map((geoValue) => {
              return (
                <div
                  onClick={() => selectGeoCode(geoValue)}
                  key={geoValue.id}
                  className="cursor-pointer border-b border-gray-600 px-2"
                >
                  {geoValue.name}, {geoValue.country}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </BaseCardWrapper>
  );
}
