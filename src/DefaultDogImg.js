const DEFAULT_IMAGE =
  "https://media.istockphoto.com/vectors/dog-silhouette-pet-animal-vector-id1257179923?k=6&m=1257179923&s=170667a&w=0&h=FMjX9pQchbzuQmwCnR8qtAP92_o56CBTkfZEZVW2ZSc=";

const DefaultDogImg = () => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-40 h-auto" src={DEFAULT_IMAGE} />
      <p>Photo unavailable</p>
    </div>
  );
};
export default DefaultDogImg;
