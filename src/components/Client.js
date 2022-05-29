import { useEffect, useState } from "react";
import axios from "axios";
import ClientCard from "./ClientCard";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import AddClient from "./AddClient";

const Client = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080/clients",
    method: 'GET'
  });

  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

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

  const searchHandler = (searchValue) => {
    setSearch(searchValue);
    if (search !== "") {
      const filteredData = clients.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(clients);
    }
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <Form>
          <FormControl
            onChange={(e) => searchHandler(e.target.value)}
            placeholder="Search Client.."
          />
          <AddClient/>
        </Form>
      </InputGroup>
      {search.length > 1
        ? filteredResults.map((result, id) => {
            return <ClientCard key={id} clients={result} />;
          })
        : clients.map((client, id) => <ClientCard key={id} clients={client} />)}
    </div>
  );
};

export default Client;
