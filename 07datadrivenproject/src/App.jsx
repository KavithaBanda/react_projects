
import Header from "./components/Header"
import Entry from "./components/Entry"
import Data from "./data"
function App() {
 const Travel=Data.map((item)=>{
  return (
    <main className="container">
      <Entry
      key={item.id}
      {...item}
      />
    </main>

  )
 })
  return (
    <>
    <Header/>
    {Travel}
    </>
  )
}

export default App
