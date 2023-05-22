interface SeasonOptionProps {
  year: string;
}

export function SeasonOption({ year }: SeasonOptionProps) {
  return (
    <div>
      <input type="radio" name="season" id={year} className="peer hidden" />
      <label
        htmlFor={year}
        className="inline-block w-[108px] cursor-pointer rounded-lg border border-neutral-700 bg-neutral-800 py-3 text-center font-bold transition-colors peer-checked:border-emerald-500 peer-checked:bg-emerald-800 peer-hover:border-emerald-500"
      >
        {year}
      </label>
    </div>
  );
}
