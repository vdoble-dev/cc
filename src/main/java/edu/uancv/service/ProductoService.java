package edu.uancv.service;

import edu.uancv.domain.Producto;

import java.util.List;

public interface ProductoService {

    public List<Producto> getAll();

    public Producto getById(Long idProducto);

    public Producto save(Producto producto);

    public Producto update(Producto producto);
}
