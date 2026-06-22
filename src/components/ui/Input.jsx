/**
 * Input Component
 * @param {Object} props
 * @param {string} [props.type='text'] - Input type: 'text', 'email', 'password', 'number', etc.
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Input value
 * @param {Function} [props.onChange] - Change handler
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {string} [props.error] - Error message to display
 * @param {string} [props.label] - Label text
 */
export function Input({ type = 'text', placeholder, value, onChange, disabled = false, error, label, ...props }) {
  return (
    <div className="grid gap-2">
      {label && <label className="text-sm font-medium text-slate-900 dark:text-white">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`rounded-lg border px-4 py-2 text-base transition-colors dark:bg-slate-700 dark:text-white ${
          error
            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
            : 'border-slate-300 focus:ring-2 focus:ring-sky-200 dark:border-slate-600'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
