import { useMemo, useState } from "react";
import type { Dev } from "../interfaces/users";

function normalize(text: string) {
  return text 
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g,"");
}

export function useDevsSearch(devs: Dev[]) {
  const [search, setSearch] = useState("");

  const filteredDevs = useMemo(() => {
    return devs.filter((dev) => {
      const searchableText = `
        ${dev.name}
        ${dev.preferredShift}
        ${dev.level}
        ${dev.profile}
        ${dev.availability}
      `;

      return normalize(searchableText).includes(normalize(search));
    });
  }, [devs, search]);

  return {
    search,
    setSearch,
    filteredDevs,
    total: filteredDevs.length
  };
}