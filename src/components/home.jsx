import amazon from '../public/amazon.png';
import flipkart from '../public/flipkart.png';
import shoes from '../public/shoes_image.png';

let ShoesSection = () => {
  return (
    <main className="shoes container">
      <div className="shoes-content">
        <h1>
          YOUR FEET <span className="highlight">DESERVE</span> THE BEST 
        </h1>
        <p>
          Your feet deserve the best and we're here to help you with our shoes. Step into comfort and style with our latest collection.
        </p>
        <div className="shoes-btn">
          <button className="primary-btn">Shop Now</button>
          <button className="second-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazon} alt="Amazon" />
            <img src={flipkart} alt="Flipkart" />
          </div>
        </div>
      </div>
      <div className="shoes-image">
        <img src={shoes} alt="Nike Shoes" className="animate" />
      </div>
    </main>
  );
};

export default ShoesSection;