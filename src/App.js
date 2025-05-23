import { Header, Footer, Sobre, Container, Services } from "./components";
function App() {
  return (
    <>
      <Header />
      <Container>
        <Sobre />
        <Services />
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
