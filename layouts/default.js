export default function DefaultLayout ({ children }) {

  return (
    <>
      <header>Default header</header>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        Default footer
      </footer>
    </>
  )
}
