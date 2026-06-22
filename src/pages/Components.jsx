import { useState } from 'react'
import { Button, Input, Modal, Toast, Loader } from '../components/ui/index.js'

function Components() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [toastType, setToastType] = useState('info')
  const [loading, setLoading] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handleShowToast = (type) => {
    setToastType(type)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
  }

  return (
    <div className="grid gap-12 py-8">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Component Library</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
          Showcase of reusable UI components used throughout the SmartStay application.
          Each component is fully documented and ready for use.
        </p>
      </section>

      {/* Button Component */}
      <section className="rounded-xl bg-slate-50 dark:bg-slate-800 p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Buttons</h2>
        <div className="grid gap-6">
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Variants</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="danger">Danger Button</Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Sizes</p>
            <div className="flex flex-wrap gap-3 items-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">States</p>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button loading={loading} onClick={() => setLoading(!loading)}>
                {loading ? 'Loading...' : 'Toggle Loading'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Input Component */}
      <section className="rounded-xl bg-slate-50 dark:bg-slate-800 p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Input Fields</h2>
        <div className="grid gap-6 max-w-md">
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            label="With Error"
            placeholder="This has an error"
            error="This field is required"
          />
          <Input
            label="Disabled"
            placeholder="Disabled input"
            disabled
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
          />
        </div>
      </section>

      {/* Modal Component */}
      <section className="rounded-xl bg-slate-50 dark:bg-slate-800 p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Welcome to SmartStay"
          footer={
            <>
              <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button onClick={() => setModalOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p>This is a modal component that can display important information or require user confirmation.</p>
        </Modal>
      </section>

      {/* Toast Component */}
      <section className="rounded-xl bg-slate-50 dark:bg-slate-800 p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Toast Notifications</h2>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => handleShowToast('info')}>Show Info</Button>
          <Button variant="secondary" onClick={() => handleShowToast('success')}>Show Success</Button>
          <Button variant="secondary" onClick={() => handleShowToast('warning')}>Show Warning</Button>
          <Button variant="danger" onClick={() => handleShowToast('error')}>Show Error</Button>
        </div>
        <Toast visible={toastVisible} type={toastType} message={`This is a ${toastType} notification!`} />
      </section>

      {/* Loader Component */}
      <section className="rounded-xl bg-slate-50 dark:bg-slate-800 p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Loaders</h2>
        <div className="grid gap-8">
          <div className="flex gap-12 items-center">
            <Loader size="sm" />
            <Loader size="md" />
            <Loader size="lg" />
          </div>
          <Loader size="md" text="Loading data..." />
        </div>
      </section>

      {/* Documentation */}
      <section className="rounded-xl bg-blue-50 dark:bg-blue-900 p-8 border border-blue-200 dark:border-blue-700">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Component Documentation</h2>
        <p className="text-slate-700 dark:text-slate-200 mb-4">
          All components are exported from <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded font-mono">/src/components/ui/index.js</code>
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-200">
          <li><strong>Button:</strong> Customizable button with variants (primary, secondary, danger) and sizes (sm, md, lg)</li>
          <li><strong>Input:</strong> Form input with label, error handling, and multiple input types</li>
          <li><strong>Modal:</strong> Dialog component with header, content, and footer</li>
          <li><strong>Toast:</strong> Notification component with auto-close support</li>
          <li><strong>Loader:</strong> Loading spinner with adjustable sizes and optional text</li>
        </ul>
      </section>
    </div>
  )
}

export default Components
