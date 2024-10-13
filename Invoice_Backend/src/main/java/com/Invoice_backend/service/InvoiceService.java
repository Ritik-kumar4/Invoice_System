package com.Invoice_backend.service;

import com.Invoice_backend.entity.Invoice;

import java.util.List;

public interface InvoiceService {
    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> fetchInvoices();

    public Invoice deleteInvoice(Long id);
}
