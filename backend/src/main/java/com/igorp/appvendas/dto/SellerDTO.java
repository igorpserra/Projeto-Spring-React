package com.igorp.appvendas.dto;

import com.igorp.appvendas.entities.Seller;

import java.io.Serializable;

public class SellerDTO implements Serializable {

    private Long id;
    private String name;
//    private List<Sale> sales = new ArrayList<>();

    public SellerDTO(){}

    public SellerDTO(Seller seller){
        this.id = seller.getId();
        this.name = seller.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public List<Sale> getSales() {
//        return sales;
//    }
//
//    public void setSales(List<Sale> sales) {
//        this.sales = sales;
//    }
}
