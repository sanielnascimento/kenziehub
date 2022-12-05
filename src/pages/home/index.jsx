import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api';

export const HomePage = () => {
  const [array1 , setArray1] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/users');
        console.log(response.data);
        setArray1(response.data);        
      } catch (error) {
        console.log(error);        
      }finally{
      }
    })();
  },[])

  console.log(array1);

  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Seja muito bem-vindo {params.name}</h1>
    </div>
  )
}
