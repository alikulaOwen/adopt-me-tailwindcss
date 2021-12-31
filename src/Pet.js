import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link
      to={`/details/${id}`}
      className="pet w-full h-36 block overflow-hidden mt-6 mr-0"
      style={{
        "border-bottom": "#333 1px solid ",
      }}
    >
      <div className="info float-left w-4/5 h-24 pt-3 flex justify-around">
        <div
          className="image-container float-left mt-0 mr-4 mb-0 ml-2 w-24 h-24"
          style={{
            "clip-path": "circle(50% at 50% 50%)",
          }}
        >
          <img
            className="w-24"
            style={{
              " min-height": "100px",
            }}
            src={hero}
            alt={name}
          />
        </div>
        <div className="flex-col">
          <h1 className="whitespace-nowrap font-normal text-3xl text-gray-700 w-11/12 overflow-hidden m-0 text-ellipsis">
            {name}
          </h1>
          <h2 className="whitespace-nowrap font-normal text-xl m-0 text-ellipsis bottom-3">{`${animal}`}</h2>
          <h2 className="whitespace-nowrap font-normal text-lg m-0 text-ellipsis bottom-3">{`${breed}`}</h2>
          <h2 className="whitespace-nowrap font-normal text-base m-0 text-ellipsis bottom-3">{` ${location}`}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Pet;
