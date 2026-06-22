/**
 * Toast Component
 * @param {Object} props
 * @param {string} [props.type='info'] - Toast type: 'info', 'success', 'warning', 'error'
 * @param {string} props.message - Toast message
 * @param {boolean} [props.visible=false] - Toast visibility
 * @param {number} [props.autoCloseDuration=3000] - Auto close duration in milliseconds
 */
export function Toast({ type = 'info', message, visible = false, autoCloseDuration = 3000 }) {
  if (!visible) return null
  
  const styles = {
    info: 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100',
    success: 'bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100',
    error: 'bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100'
  }
  
  return (
    <div className={`fixed bottom-6 right-6 rounded-lg px-6 py-4 shadow-lg ${styles[type]} animate-in slide-in-from-bottom-4`}>
      <p className="font-medium">{message}</p>
    </div>
  )
}
