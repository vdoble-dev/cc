package edu.uancv.controller;

import edu.uancv.domain.Producto;
import edu.uancv.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public ResponseEntity<List<Producto>> getAll() {
        return new ResponseEntity<List<Producto>>(this.productoService.getAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> getById(@PathVariable("id") Long idProducto) {
        return new ResponseEntity<Producto>(this.productoService.getById(idProducto), HttpStatus.ACCEPTED);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Producto> save(@RequestBody Producto producto) {
        return new ResponseEntity<Producto>(this.productoService.save(producto), HttpStatus.CREATED);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Producto> update(@RequestBody Producto producto) {
        return new ResponseEntity<Producto>(this.productoService.update(producto), HttpStatus.ACCEPTED);
    }
}
