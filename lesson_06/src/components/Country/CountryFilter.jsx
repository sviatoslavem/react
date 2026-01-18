import React from "react";
import { useSearchParams } from "react-router";
import { REGIONS } from "../../constants/constants";

// Імпортуємо компоненти shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CountryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";

  // Shadcn передає відразу value, а не об'єкт події e
  const handleValueChange = (value) => {
    if (value === "all") {
      searchParams.delete("filter");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ filter: value });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Стилізація підпису (label) за допомогою Tailwind */}
      <span className="text-sm font-medium text-muted-foreground">
        Filter by Region:
      </span>

      <Select value={filter} onValueChange={handleValueChange}>
        {/* Кнопка вибору (Trigger) */}
        <SelectTrigger className="w-[200px] bg-background shadow-sm hover:bg-accent transition-colors">
          <SelectValue placeholder="Select region" />
        </SelectTrigger>

        {/* Випадаючий список */}
        <SelectContent>
          {/* Перебираємо об'єкт REGIONS для створення опцій */}
          {Object.entries(REGIONS).map(([key, value]) => (
            <SelectItem key={key} value={value} className="cursor-pointer">
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountryFilter;
