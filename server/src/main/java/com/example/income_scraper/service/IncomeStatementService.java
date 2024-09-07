package com.example.income_scraper.service;

import com.example.income_scraper.model.IncomeStatement;
import com.example.income_scraper.repository.IncomeStatementRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class IncomeStatementService {

    @Autowired
    private IncomeStatementRepository repository;

    public List<IncomeStatement> getIncomeStatementsByTicker(String ticker) {
        return repository.findByTicker(ticker);
    }

    public IncomeStatement scrapeAndSaveIncomeStatement(String ticker) throws IOException {
        // String url = "https://finance.yahoo.com/quote/" + ticker + "/financials";
        // Document document = Jsoup.connect(url).get();
        // // print the HTML content
        // System.out.println(document.html());
        // Example: Extract revenue and net income (you'll need to adjust based on the
        // HTML structure)
        long netIncome = 5000;
        long revenue = 5000;
        // Create and save the income statement
        IncomeStatement incomeStatement = new IncomeStatement();
        incomeStatement.setTicker(ticker);
        incomeStatement.setRevenue(revenue);
        incomeStatement.setNetIncome(netIncome);

        System.out.println("IncomeStatement to save: " + incomeStatement);

        return repository.save(incomeStatement);
    }
}
