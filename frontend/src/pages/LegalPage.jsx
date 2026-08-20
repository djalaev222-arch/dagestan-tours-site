import './legal-page.css'

export function LegalPage({ title, children }) {
  return (
    <div className="legal-page">
      <div className="container legal-page__content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}
