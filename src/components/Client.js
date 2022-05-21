import { useEffect, useState } from "react";
import axios from "axios";
import ClientCard from './ClientCard'

const Client = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080/clients",
  });

  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("/all").then((res) => {
      const allClients = [];
      for (const key in res.data) {
        allClients.push({
          id: key,
          firstName: res.data[key].firstName,
          lastName: res.data[key].lastName,
          phoneNumber: res.data[key].phoneNumber,
          email: res.data[key].email,
          city: res.data[key].city,
          description: res.data[key].description,
          goals: res.data[key].goals,
        });
      }
      setClients(allClients); 
    });
  }, []);


  return <div>
    {clients.map((client, id) => 
      <ClientCard key={id}
      clients={client} />
    )}
  </div>
};

export default Client;
