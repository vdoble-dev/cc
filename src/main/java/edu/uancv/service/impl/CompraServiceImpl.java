package edu.uancv.service.impl;

import edu.uancv.dao.CompraDao;
import edu.uancv.dao.DetalleCompraDao;
import edu.uancv.domain.Compra;
import edu.uancv.domain.Producto;
import edu.uancv.service.CompraService;
import edu.uancv.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional(readOnly = true)
public class CompraServiceImpl implements CompraService {

    @Autowired
    CompraDao compraDao;

    @Autowired
    DetalleCompraDao detalleCompraDao;

    @Autowired
    ProductoService productoService;

    @Override
    public List<Compra> getAll() {
        return compraDao.findAll();
    }

    @Override
    public Compra getById(Long idCompra) {
        return compraDao.findOne(idCompra);
    }

    @Override
    @Transactional(readOnly = false)
    public Compra save(Compra compra) {

        compra.setFecha(new Date());

        // Calcular el total de los productos
        compra.setTotal(
                compra.getListaDetalleCompra()
                        .stream()
                        .mapToDouble(detalle -> {
                            // Calcula precio del producto * cantidad
                            Producto producto = productoService.getById(detalle.getProducto().getPk());
                            detalle.setPrecio(producto.getPrecio());
                            detalle.setTotal(producto.getPrecio() * detalle.getCantidad());

                            return detalle.getTotal();
                        })
                        .sum()
        );

        // Actualizar stock de cada producto
        compra.getListaDetalleCompra()
                .forEach(detalle -> productoService.updateStock(detalle.getProducto().getPk(), detalle.getCantidad()));

        compraDao.save(compra);

        compra.getListaDetalleCompra().forEach(detalleCompra -> {
            detalleCompra.setCompra(compra);
            detalleCompraDao.save(detalleCompra);
        });

        return compra;
    }
}
