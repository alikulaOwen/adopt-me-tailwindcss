import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search rounded-xl bg-green-200 w-1/2 p-4 mb-6"
    style={{
      "box-shadow": "0px 0px 12px #aaa, -0px -0px 12px #fff"
    }}
    >
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
