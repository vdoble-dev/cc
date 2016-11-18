package edu.uancv.service.impl;

import edu.uancv.dao.ProductoDao;
import edu.uancv.domain.Producto;
import edu.uancv.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    ProductoDao productoDao;

    @Override
    public List<Producto> getAll() {
        return productoDao.findAll();
    }

    @Override
    public Producto getById(Long idProducto) {
        return productoDao.findOne(idProducto);
    }

    @Override
    @Transactional(readOnly = false)
    public Producto save(Producto producto) {
        return productoDao.save(producto);
    }

    @Override
    @Transactional(readOnly = false)
    public Producto update(Producto producto) {
        return productoDao.saveAndFlush(producto);
    }

    @Override
    public void updateStock(Long idProducto, Long cantidad) {
        Producto producto = this.getById(idProducto);
        producto.setCantidad(producto.getCantidad() - cantidad);
        this.update(producto);
    }
}
