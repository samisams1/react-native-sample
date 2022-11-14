import { useEffect, useState } from "react";

const FeedbackQuery = () => {
      const [data,setData] = useState([]);
      useEffect(() => {
       fetch('http://localhost:9090/feedbacks')
         .then((response) => response.json())
         .then((json) => setData(json))
         .catch((error) => console.error(error));
     }, []);
    return {data};
  };
  
  export default FeedbackQuery;