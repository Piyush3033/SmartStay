/**
 * Loader Component
 * @param {Object} props
 * @param {string} [props.size='md'] - Loader size: 'sm', 'md', 'lg'
 * @param {string} [props.text] - Optional loading text
 */
export function Loader({ size = 'md', text }) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  }
  
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${sizes[size]} border-4 border-slate-200 border-t-sky-500 rounded-full animate-spin dark:border-slate-700`} />
      {text && <p className="text-slate-600 dark:text-slate-400 font-medium">{text}</p>}
    </div>
  )
}
