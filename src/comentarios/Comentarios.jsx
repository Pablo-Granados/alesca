import React, {useState, useEffect} from 'react'

const Comentarios = ({placeId, apiKey}) => {

    const [coments, setComents] = useState([]);

    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${process.env.REACT_APP_API_KEY}`)
          .then((response) => response.json())
          .then((data) => setReviews(data.result.reviews))
          .catch((error) => console.log(error));
      }, [placeId, apiKey]);

      return (
        <div>
          {coments.map((coment) => (
            <div key={coment.time}>
              <h3>{coment.author_name}</h3>
              <p>{coment.text}</p>
              <p>Rating: {coment.rating}</p>
            </div>
          ))}
        </div>
      );
    };

export default Comentarios