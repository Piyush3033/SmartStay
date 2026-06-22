/**
 * Button Component
 * @param {Object} props
 * @param {string} [props.variant='primary'] - Button style variant: 'primary', 'secondary', 'danger'
 * @param {string} [props.size='md'] - Button size: 'sm', 'md', 'lg'
 * @param {boolean} [props.disabled=false] - Button disabled state
 * @param {boolean} [props.loading=false] - Show loading state
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} [props.onClick] - Click handler
 */
export function Button({ variant = 'primary', size = 'md', disabled = false, loading = false, children, onClick, ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? '...' : children}
    </button>
  )
}
