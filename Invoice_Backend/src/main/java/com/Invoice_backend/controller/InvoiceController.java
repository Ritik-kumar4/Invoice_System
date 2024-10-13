package com.Invoice_backend.controller;

import com.Invoice_backend.entity.Invoice;
import com.Invoice_backend.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class InvoiceController {

    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice){
        return  this.invoiceService.addInvoice(invoice);
    }

    @GetMapping("/invoice")
    public List<Invoice> getAllInvoice(){
        return this.invoiceService.fetchInvoices();
    }

    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String id){
        return this.invoiceService.deleteInvoice(Long.parseLong(id));
    }
}
