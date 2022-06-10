const DogInfo = ({ dogInfo }) => {
  return (
      <div>
          {dogInfo.map(dog => {
              return ( 
                  <div id='dog-info'>
                      <h1>{dog.name}</h1>
                      <ul>
                      <li>Temperament: {dog.temperament}</li>
                      <li>Bred For: {dog.bred_for}</li>
                      <li>Life Span: {dog.life_span}</li>
                      <li>Height: {dog.height.imperial} inches</li>
                      <li>Weight: {dog.weight.imperial} pounds</li>
                     <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={`Image of ${dog.name}`}/>
                     </ul>
                  </div>
              )

          })}
      
      </div>
  );
}

export default DogInfo;