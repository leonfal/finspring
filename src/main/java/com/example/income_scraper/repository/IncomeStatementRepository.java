package com.example.income_scraper.repository;

import com.example.income_scraper.model.IncomeStatement;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

// Mongorepository is an interface that extends the CrudRepository interface. 
// It provides methods for CRUD operations and querying the database.
public interface IncomeStatementRepository extends MongoRepository<IncomeStatement, String> {
    List<IncomeStatement> findByTicker(String ticker);
}
