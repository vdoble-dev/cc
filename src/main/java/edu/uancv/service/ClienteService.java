package edu.uancv.service;

import edu.uancv.domain.Cliente;

import java.util.List;

public interface ClienteService {

    public List<Cliente> getAll();

    public Cliente getById(Long idCliente);

    public Cliente save(Cliente cliente);

    public Cliente update(Cliente cliente);

    public Cliente checkCredentials(String userName, String password);
}
