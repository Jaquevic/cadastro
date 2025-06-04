export default function PageWrapper({ children }) {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      {children}
    </div>
  )
}
