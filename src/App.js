
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<SelectedProduct />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes  >
    </div>
  );
}

export default App;
