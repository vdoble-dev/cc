package edu.uancv.dao;


import edu.uancv.domain.Compra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompraDao extends JpaRepository<Compra, Long> {
}
