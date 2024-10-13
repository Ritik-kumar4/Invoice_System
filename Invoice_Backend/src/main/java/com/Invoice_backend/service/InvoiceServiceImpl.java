package com.Invoice_backend.service;

import com.Invoice_backend.entity.Invoice;
import com.Invoice_backend.repository.InvoiceRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class InvoiceServiceImpl implements InvoiceService{

    @Autowired
    InvoiceRepo invoiceRepo;
    @Override
    public Invoice addInvoice(Invoice invoice) {
        return invoiceRepo.save(invoice);
    }

    @Override
    public List<Invoice> fetchInvoices() {
        List<Invoice> lst=invoiceRepo.findAll();
        return null;
    }

    @Override
    public Invoice deleteInvoice(Long id) {
        Invoice inv=invoiceRepo.findById(id).get();
        invoiceRepo.delete(inv);
        return inv;
    }
}
