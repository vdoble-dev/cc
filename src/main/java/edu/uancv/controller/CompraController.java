package edu.uancv.controller;

import edu.uancv.domain.Compra;
import edu.uancv.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/compras")
public class CompraController {

    @Autowired
    private CompraService compraService;

    @GetMapping
    public ResponseEntity<List<Compra>> getAll() {
        return new ResponseEntity<List<Compra>>(this.compraService.getAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Compra> getById(@PathVariable("id") Long idCompra) {
        return new ResponseEntity<Compra>(this.compraService.getById(idCompra), HttpStatus.ACCEPTED);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Compra> save(@RequestBody Compra compra) {
        return new ResponseEntity<Compra>(this.compraService.save(compra), HttpStatus.CREATED);
    }
}
