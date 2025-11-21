import { useCallback, useId } from "react";


export default function InputNumeric({
  value,
  max = Infinity,
  min = 0,
  onChange = () => {},
  label = "Numeric input",
  placeholder = "",
}) {
  const id = useId();

  


  return (
    <fieldset className="w-80">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <div className="relative">
        <input
          type="text"
          id={id}
          inputMode="decimal"
          autoComplete="off"
          pattern={pattern}
          value={value ?? ""}
          onChange={handleChange}
          placeholder={placeholder}
          className="peer block w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-right text-sm text-gray-900 shadow-sm transition-all placeholder:text-gray-400 invalid:border-red-500 focus:border-blue-400 focus:ring focus:ring-blue-200"
        />

        {/* Indicador decorativo */}
        <span className="pointer-events-none absolute right-3 top-2 text-gray-400 text-xs">
          {mode === "integer" || mode === "natural" ? "#️⃣" : "🔢"}
        </span>
      </div>

      <p
        id={`${id}-helper-text`}
        className="mt-2 hidden text-xs text-red-600 peer-invalid:block"
      >
      </p>
    </fieldset>
  );
}
