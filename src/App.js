import React from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: initialProductList,
    };
  }

  handleProductQuantityChange = (productId, newQuantity) => {
    const newQuantityNumber = parseInt(newQuantity, 10);

    this.setState({
      productList: this.state.productList.map((product) => {
        return productId === product.id
          ? { ...product, quantity: newQuantityNumber }
          : product;
      }),
    });
  };

  render() {
    const { productList } = this.state;
    const { handleProductQuantityChange } = this;

    return (
      <div className='App'>
        <h1>Ma commande</h1>
        <table>
          <thead>
            <tr>
              <th>Produit</th>
              <th>Prix unitaire</th>
              <th>Quantité</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {productList.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <input
                      type='number'
                      min='0'
                      value={product.quantity}
                      onChange={(event) =>
                        handleProductQuantityChange(
                          product.id,
                          event.target.value
                        )
                      }
                    />
                  </td>
                  <td>{product.price * product.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
