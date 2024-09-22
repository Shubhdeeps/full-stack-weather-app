import { useEffect, useState } from "react";
import BaseCardWrapper from "./BaseCardWrapper";
import { useDebounce } from "../../hooks/useDebounce";
import { mockGeoCode } from "../../assets/mock";
import { GeoCodeModel } from "../../models/GeoCoding.model";

export default function GeoCodedCard() {
  const [searchText, setText] = useState("");
  const [debouncedText] = useDebounce(searchText);
  useEffect(() => {
    console.log(debouncedText);
  }, [debouncedText]);

  function handleClick(geoLocation: GeoCodeModel) {}
  return (
    <BaseCardWrapper className="w-[340px] h-full" pattern="patternCyan">
      <div>
        <input
          className="outline-none bg-transparent outline-gray-500 rounded-lg px-2"
          value={searchText}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="h-[135px] my-2 overflow-y-scroll scroll-bar">
          <div className="flex flex-col gap-1 h-fit">
            {mockGeoCode.map((mockValue) => {
              return (
                <div
                  key={mockValue.id}
                  className="cursor-pointer border-b border-gray-600 px-2"
                >
                  {mockValue.name}, {mockValue.country}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </BaseCardWrapper>
  );
}
