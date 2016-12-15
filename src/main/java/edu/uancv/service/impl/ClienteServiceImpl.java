package edu.uancv.service.impl;

import edu.uancv.dao.ClienteDao;
import edu.uancv.domain.Cliente;
import edu.uancv.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    ClienteDao clienteDao;

    @Override
    public List<Cliente> getAll() {
        return clienteDao.findAll();
    }

    @Override
    public Cliente getById(Long idCliente) {
        return clienteDao.findOne(idCliente);
    }

    @Override
    @Transactional(readOnly = false)
    public Cliente save(Cliente cliente) {
        return clienteDao.save(cliente);
    }

    @Override
    @Transactional(readOnly = false)
    public Cliente update(Cliente cliente) {
        return clienteDao.saveAndFlush(cliente);
    }

    @Override
    public Cliente checkCredentials(String userName, String password) {

        List<Cliente> clientes = this.getAll();
        Cliente cliente = null;

        if (clientes != null) {
            for (Cliente c : clientes) {
                if (isCredentialsEquals(c, userName, password)) return c;
            }
        }

        return cliente;
    }

    private boolean isCredentialsEquals(Cliente cliente, String userName, String password) {
        return cliente.getUserName().equalsIgnoreCase(userName) && cliente.getPassword().equalsIgnoreCase(password);
    }
}
