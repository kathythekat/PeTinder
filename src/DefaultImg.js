const DOG =
  "https://media.istockphoto.com/vectors/dog-silhouette-pet-animal-vector-id1257179923?k=6&m=1257179923&s=170667a&w=0&h=FMjX9pQchbzuQmwCnR8qtAP92_o56CBTkfZEZVW2ZSc=";

const CAT =
  "https://i.pinimg.com/600x315/37/cb/c4/37cbc4ef8debc97bd39d15ed6af2c922.jpg";
const DefaultImg = ({ type }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-40 h-auto" src={type === "Dog" ? DOG : CAT} />
      <p>Photo unavailable</p>
    </div>
  );
};
export default DefaultImg;
