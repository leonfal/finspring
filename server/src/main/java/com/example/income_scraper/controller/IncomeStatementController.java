package com.example.income_scraper.controller;

import com.example.income_scraper.model.IncomeStatement;
import com.example.income_scraper.service.IncomeStatementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/income-statements")
public class IncomeStatementController {

    @Autowired
    private IncomeStatementService service;

    @GetMapping("/{ticker}")
    public List<IncomeStatement> getIncomeStatementsByTicker(@PathVariable String ticker) {
        return service.getIncomeStatementsByTicker(ticker);
    }

    @PostMapping("/scrape/{ticker}")
    public IncomeStatement scrapeAndSaveIncomeStatement(@PathVariable String ticker) throws IOException {
        return service.scrapeAndSaveIncomeStatement(ticker);
    }
}
