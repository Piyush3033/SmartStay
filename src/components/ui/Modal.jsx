/**
 * Modal Component
 * @param {Object} props
 * @param {boolean} [props.open=false] - Modal visibility
 * @param {Function} [props.onClose] - Close handler
 * @param {string} [props.title] - Modal title
 * @param {React.ReactNode} props.children - Modal content
 * @param {React.ReactNode} [props.footer] - Modal footer content
 */
export function Modal({ open = false, onClose, title, children, footer }) {
  if (!open) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="rounded-2xl bg-white p-8 shadow-2xl w-full max-w-md dark:bg-slate-800">
        {title && <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h2>}
        <div className="text-slate-700 dark:text-slate-200">{children}</div>
        {footer && <div className="mt-6 flex gap-3 justify-end">{footer}</div>}
        {!footer && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-200 text-slate-900 hover:bg-slate-300 font-semibold dark:bg-slate-700 dark:text-white"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
