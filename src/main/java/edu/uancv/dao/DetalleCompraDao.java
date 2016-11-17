package edu.uancv.dao;


import edu.uancv.domain.DetalleCompra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetalleCompraDao extends JpaRepository<DetalleCompra, Long> {
}
