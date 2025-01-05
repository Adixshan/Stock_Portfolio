package com.example.portfolio.service;

import com.example.portfolio.entity.Stock;
import com.example.portfolio.repository.StockRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class StockService {
    @Value("${alphavantage.api.key}")
    private String apiKey;

    private final StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public double getStockPrice(String ticker) {
        String url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + ticker + "&apikey=" + apiKey;
        RestTemplate restTemplate = new RestTemplate();
        try {
            String response = restTemplate.getForObject(url, String.class);
            return Double.parseDouble(response.split("\"05. price\": \"")[1].split("\",")[0]);
        } catch (Exception e) {
            e.printStackTrace();
            return 0.0;
        }
    }
}
