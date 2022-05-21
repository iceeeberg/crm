package com.clientmanagement.crm.service;

import com.clientmanagement.crm.exceptions.ClientManagementExceptions;
import com.clientmanagement.crm.model.Client;
import com.clientmanagement.crm.repository.ClientManagementRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientManagementRepo managementRepo;

    public Client addClient(Client client) {
        return managementRepo.save(client);
    }

    public Client findByLastName(String lastName) {
        return managementRepo.findByLastName(lastName).orElseThrow(() ->
                new ClientManagementExceptions("Cannot find client with last name " + lastName));
    }

    public Client findByEmail(String email) {
        return managementRepo.findByEmail(email).orElseThrow(() ->
                new ClientManagementExceptions("Cannot find client with email address " + email));
    }

    public List<Client> getAllClients() {
        return managementRepo.findAll();
    }

    @Transactional
    public void deleteClient(Long id) {
        managementRepo.deleteById(id);
    }

    public Client updateClient(Client client) {
        return managementRepo.save(client);
    }

}
