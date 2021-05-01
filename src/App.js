import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";
import Topbar from "./components/Topbar/Topbar";



 const App = () => {
  
  const [itemCount , setItemCount] = useState(0);
  const [cart, setCart] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 }]);


  const  handleIncrement = product => {
      // cart array'inin kopyasını oluştur
      const updatedCart = [...cart];
      // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
      const index = updatedCart.indexOf(product);
      // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
      updatedCart[index] = { ...updatedCart[index] };
      updatedCart[index].value++;
      // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
      const itemCount = getItemCount(updatedCart);
      // state'i güncelle
      setCart(cart);
      setItemCount(itemCount);

  };


  const handleDecrement = product => {
    const updatedCart = [...cart];
    const index = updatedCart.indexOf(product);
    updatedCart[index] = { ...updatedCart[index] };
    updatedCart[index].value--;
    const itemCount = getItemCount(updatedCart);
    setCart(cart);
    setItemCount(itemCount);
  };

  
  const getItemCount = cart => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };


  return ( 
    <div className="App"> 
        <Topbar/>
        <Navbar totalItems={itemCount} />
        <ProductsGrid
          products={products}
          cart={cart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        /> 
    </div>
  )
}

export default App ;

