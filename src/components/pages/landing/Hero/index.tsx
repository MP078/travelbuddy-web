"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { PLACES } from "@/data/places";
import Fuse from "fuse.js";

const fuseOptions = {
  threshold: 0.4, // Adjust for more/less fuzziness
  keys: [], // We're searching plain strings
};

const Hero = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Memoize Fuse instance
  const fuse = useMemo(() => new Fuse(PLACES, fuseOptions), []);

  // Fuzzy search results
  const filteredPlaces =
    searchLocation.trim() === ""
      ? []
      : fuse.search(searchLocation).map((result) => result.item);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchLocation && searchDate) {
      router.push("/login");
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || filteredPlaces.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredPlaces.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredPlaces.length - 1
      );
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0 && highlightedIndex < filteredPlaces.length) {
        setSearchLocation(filteredPlaces[highlightedIndex]);
        setShowDropdown(false);
        setHighlightedIndex(-1);
        // Optionally, move focus to next input
        // inputRef.current?.blur();
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div id="top" className="relative h-[600px]">
      <Image
        height={1000}
        width={2000}
        src={"/images/hero.png"}
        alt="Nepal Landscape"
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">
          Find Your Perfect Travel Companion in Nepal
        </h1>
        <form
          onSubmit={handleSearch}
          className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg hidden lg:block"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Where do you want to go?"
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2"
                style={
                  {
                    "--tw-ring-color": "var(--color-brand-orange)",
                  } as React.CSSProperties
                }
                value={searchLocation}
                onChange={(e) => {
                  setSearchLocation(e.target.value);
                  setShowDropdown(true);
                  setHighlightedIndex(-1);
                }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                onKeyDown={handleInputKeyDown}
                required
                autoComplete="off"
              />
              {showDropdown && filteredPlaces.length > 0 && (
                <ul className="absolute z-10 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-auto">
                  {filteredPlaces.map((place, idx) => (
                    <li
                      key={place}
                      className={`px-4 py-2 cursor-pointer ${
                        highlightedIndex === idx ? "bg-gray-100" : ""
                      }`}
                      onMouseDown={() => {
                        setSearchLocation(place);
                        setShowDropdown(false);
                        setHighlightedIndex(-1);
                      }}
                      onMouseEnter={() => setHighlightedIndex(idx)}
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              )}
              {showDropdown &&
                searchLocation.trim() !== "" &&
                filteredPlaces.length === 0 && (
                  <div className="absolute z-10 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                    <div className="px-4 py-2 text-gray-500 text-sm">
                      No places found.
                    </div>
                  </div>
                )}
            </div>
            <div className="flex-1 relative">
              <input
                type="date"
                className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2"
                style={
                  {
                    "--tw-ring-color": "var(--color-brand-orange)",
                  } as React.CSSProperties
                }
                min={new Date().toISOString().split("T")[0]} // Only today or future
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                required
              />
            </div>
            <Button size="lg" type="submit">
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
