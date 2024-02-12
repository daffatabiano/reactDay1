import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';

const App = () => {
  const name = 'Daffa Tabiano';
  const isSingle = false ;

  const renderStatus = (status) => {
    if (status) {
      return <p>saya sudah menikah</p>;
  }return <p>saya belum menikah</p>;
}
return (
  <div>
    <Navbar />
    <Banner />
    <Footer />
    {/* <h1>hello react, nama saya {name}</h1>
    {isSingle ? <p> saya sudah menikah</p> : <p> saya belum menikah</p>}
    {renderStatus(isSingle)} */}

  </div>
)
}

export default App;