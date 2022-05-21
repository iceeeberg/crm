package com.clientmanagement.crm.repository;

import com.clientmanagement.crm.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientManagementRepo extends JpaRepository<Client, Long> {

    Optional<Client> findByEmail(String email);
    Optional<Client> findByLastName(String lastName);
}
