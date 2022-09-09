import Header from "./components/header"
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="vendas">
          <div className ="dsmeta-contaeiner">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )

}

export default App
