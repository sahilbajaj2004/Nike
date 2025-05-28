import React from 'react'

const products = [
  {
    id: 1,
    name: 'Nike Air Max',
    price: '₹120',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPNGiECenbSjl3gd0_YYQKp2Fx3wnplIafS0dP2qmb88lh9KY0UZ2x5Mi3wuJXCTCP9NMEy03DjMveVcdpg3JiP9pJaapGwTvg-7HclC92S2QlO1M3Ks2oMQ'
  },
  {
    id: 2,
    name: 'Nike Revolution',
    price: '₹90',
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIAvc28GxvS-74j9jJyN7HDYQVAK1a0CJdMNOIitKXeoQ6F2FHcwxKZEwIGBG-Xm6aaJLLXl6jkoWciWjOdjMMxVDX3TplJvZEWRvWTV-jmNiD7LDfpo-zBg'
  },
  {
    id: 3,
    name: 'Nike Pegasus',
    price: '₹110',
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStL6Cslx_Y1slrRLppU_CCzBOAGeQXrOYDYTsFTRy_8sgI584KJfH8dhsrtZe2oJODlj-KZm4385apyivBd8t0nts4M6OVY0bJjmlsoJYBvCBPzpLrt4x9sA'
  },
  {
    id: 4,
    name: 'Nike Air Force 1',
    price: '₹100',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQERPjfR7Aw1l0bOrjT87oBpqHBNbjWA6yPXIVRDex54qUeMmSg-UepGQ0hk7CD_IJxLC4xTUx3UgsQUpT0ZlwobuhrNINS9eMXQxrT4zb_RhNDa3nYNvT4rps'
  },
  {
    id: 5,
    name: 'Nike ZoomX',
    price: '₹130',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxFYiOcWJe1codWTHZdjAvJt7GPiqbqoFZR71qlZlppZQ4j0VPAjmM5MhR8doK-Dt9Pf0Y5Ryzsv3K9AQfnif6P6HUQI9jLSTRx6NSUYhwdvQCI0HGcMPokQ'
  },
  {
    id: 6,
    name: 'Nike Blazer Mid',
    price: '₹105',
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTswXRa3b5AbWo9gPgl3rRbQYqYffH8JJOHz_9ItnR_Y0Se2ytBw2YiaWjEl531al270cWtM3oVDIDIOEALBAJZejf1eIx5tTako0KTshxcYZQr-ZAEYgT39A'
  },
  {
    id: 7,
    name: 'Nike Dunk Low',
    price: '₹115',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS8Y6upbp0p3BONEFBaZn3u9swfz69Aum92_Yl-gyGS_63CPzV7aDoSqrYsg-ERIRgUK6TaLWqxbnFKwuacNo_TyBOl7MuloLIJHa-AKVsYjWVskrtt4_VI5A'
  },
  {
    id: 8,
    name: 'Nike React Infinity',
    price: '₹140',
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRF0bBH8fbMvXRmEDlaN3xiWwjW49ecOECxuK2xmKIbqJHm-9J9RfpISTyWGn26q2TWbS8jq8GpkQbkNmq6LD9Q3fw5oYbhXuQi7cvND4i00Z6IHLfW49Efx18'
  }
];

// Helper to group products in pairs
const getPairs = arr => {
  const pairs = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push(arr.slice(i, i + 2));
  }
  return pairs;
};

const Shop = () => (
 // ...existing code...
  <div className="shop-section">
    <div className="shop-zigzag-rows">
      {getPairs(products).map((pair, rowIdx) => (
        <div className="shop-zigzag-row" key={rowIdx}>
          {pair.map((product) => (
            <div className="shop-zigzag-card" key={product.id}>
              <img src={product.img} alt={product.name} className="shop-zigzag-img" width={600} />
              <div className="shop-zigzag-info">
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Shop;