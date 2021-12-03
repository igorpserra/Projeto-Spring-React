package com.igorp.appvendas.services;

import com.igorp.appvendas.dto.SaleDTO;
import com.igorp.appvendas.dto.SaleSuccessDTO;
import com.igorp.appvendas.dto.SaleSumDTO;
import com.igorp.appvendas.entities.Sale;
import com.igorp.appvendas.repositories.SaleRepository;
import com.igorp.appvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable){
        sellerRepository.findAll();  //evita consultas desnecessárias ao banco, armazenando os vendedores em cache
        Page<Sale> result = saleRepository.findAll(pageable);

        return result.map(sale -> new SaleDTO(sale));
    }

    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupedBySeller(){
        return saleRepository.amountGroupedBySeller();
    }

    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successGroupedBySeller(){
        return saleRepository.successGroupedBySeller();
    }
}
