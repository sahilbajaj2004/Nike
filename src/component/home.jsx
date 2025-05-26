import amazon from '../public/amazon.png';
import flipkart from '../public/flipkart.png';
import shoes from '../public/shoes_image.png';
let ShoesSection = ()=> {
  return (
      <main className="shoes container">
      <div className="shoes-content">
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p> YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
            SHOES.
        </p>
        <div className="shoes-btn">
            <button>Shop Now</button>
            <button className="second-btn">Category</button>
      </div>
      <div
        className="Shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
              <img src={amazon} alt="amazon-logo" />
              <img src={flipkart} alt="flipkart-logo" />
            </div>
      </div>
      </div>
      <div className="shoes-image"></div>
       <img src={shoes} alt="shoes-image" className='animate' />

      </main>
  );
};
export default ShoesSection;