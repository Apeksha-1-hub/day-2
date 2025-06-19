import Profile from "./Profile";

export default function Avatar() {
    const arr=[
    { img: "https://i.pinimg.com/736x/9e/7e/ef/9e7eeff30e470c3a5a5f7627aad19d9d.jpg", alt:"Lin Lanying", price:500},
    { img: "https://i.pinimg.com/736x/e8/38/49/e838496fb1c5b6adc8a0e03daf3fe23f.jpg", alt:"Lin Lanying", price:500},
    { img: "https://i.pinimg.com/736x/0a/33/62/0a3362b69f2513388780a63998689a80.jpg", alt:"Lin Lanying",  price:500},
    { img: "https://i.pinimg.com/736x/c4/ea/1b/c4ea1bb51e31f77e23ca228f2910d3c2.jpg", alt:"Lin Lanying",  price:500},
    { img: "https://i.pinimg.com/736x/dc/3e/b4/dc3eb40f49b8823f27320ab75fecc969.jpg", alt:"Lin Lanying",  price:500},
    { img: "https://i.pinimg.com/736x/bb/fe/b0/bbfeb0f4c3b7015166dcd4ce242e7e84.jpg", alt:"Lin Lanying",  price:500},
    { img: "https://i.pinimg.com/736x/41/df/73/41df73fa87b50075fd5050af84137776.jpg", alt:"Lin Lanying",  price:500},
    { img: "https://i.pinimg.com/736x/15/91/29/15912997aff531b3d4472cdad5b5e62b.jpg", alt:"Lin Lanying",  price:500},

    ];
  return (
  <div className="flex gap-10">
   {arr.map((obj, index) => ( 
    <Profile img={obj.img} alt={obj.alt} price={obj.price} key={index}/>
   ))}
  </div>

  );
}