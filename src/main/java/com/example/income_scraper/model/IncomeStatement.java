package com.example.income_scraper.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data // Lombok annotation to generate getters, setters, equals, toString
@Document(collection = "income_statements") // indicates that this is a MongoDB document
public class IncomeStatement {

    @Id // PK
    private String id;
    private String ticker;
    private String type; // yearly or quarterly
    private String period; // FY 2023, Q1 2023, etc.
    private long revenue;
    private long netIncome;
    private Double revenueGrowthRate;
}
