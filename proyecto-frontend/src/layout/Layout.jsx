import Header from "../components/Header"

export default function Layout ({ children }) {
  return (
    <>
    <App />
      {children}
    </>
  )
}