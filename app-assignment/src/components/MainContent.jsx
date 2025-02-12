import { useState } from 'react';

const products = [
  { name: 'Car Toy', price: 100, category: 'Electronics' },
  { name: 'Calculator', price: 200, category: 'Electronics' },
  { name: 'Speaker', price: 300, category: 'Electronics' },
  { name: 'SmartWatch', price: 400, category: 'Electronics' },
  { name: 'Earphones', price: 500, category: 'Electronics' },
  { name: 'DVDPlayer', price: 600, category: 'Electronics' },
  { name: 'GameController', price: 700, category: 'Electronics' },
  { name: 'Printer', price: 800, category: 'Electronics' },
  { name: 'Laptop', price: 900, category: 'Electronics' },
  { name: 'HeadSet', price: 1000, category: 'Electronics' },
  { name: 'Apple-12', price: 1100, category: 'Mobiles' },
  { name: 'Apple-13', price: 1200, category: 'Mobiles' },
  { name: 'Apple-14', price: 1300, category: 'Mobiles' },
  { name: 'OnePlus-Nord', price: 1400, category: 'Mobiles' },
  { name: 'Grinder', price: 1500, category: 'Home Appliances' },
  { name: 'AirConditioner', price: 1600, category: 'Home Appliances' },
  { name: 'IronBox', price: 1700, category: 'Home Appliances' },
  { name: 'ElectricStove', price: 1800, category: 'Home Appliances' },
  { name: 'Toaster', price: 1900, category: 'Home Appliances' },
  { name: 'WashingMachine', price: 2000, category: 'Home Appliances' },
  { name: 'Clock', price: 2100, category: 'Home Appliances' },
  { name: 'CoffeeMaker', price: 2200, category: 'Home Appliances' },
  { name: 'ElectricGrill', price: 2300, category: 'Home Appliances' },
  { name: 'Samsung-Ultra', price: 2400, category: 'Mobiles' },
  { name: 'Samsung-Pro', price: 2500, category: 'Mobiles' },
  { name: 'Vivo-12', price: 2600, category: 'Mobiles' },
  { name: 'Oppo-Max', price: 2700, category: 'Mobiles' },
  { name: 'OnePlus-13R', price: 2800, category: 'Mobiles' },
  { name: 'OnePlus-11R', price: 2900, category: 'Mobiles' },
  { name: 'OnePlus-Nord2', price: 3000, category: 'Mobiles' }
];


const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;

