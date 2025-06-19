function Profile({img,alt,price}) {
  return (
    <div className="border-1 border-amber-200 rounded-2xl p-5 m-3">
    <img
      className="avatar rounded-full py-3"
      src={img}
      alt={alt}
      width={300}
      height={100}
      
    />
    <p className="italic">{alt}</p>
    <h6>$price</h6>
    </div>
  );
}
export default Profile