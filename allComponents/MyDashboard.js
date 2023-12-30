import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setStockData } from '../reduxComponents/stockDataActions';
import { addToFavorites, removeFromFavorites } from '../reduxComponents/favoritesActions';

const symbols = [
  'AAPL', 'AMZN', 'GOOGL', 'MSFT', 'FB', 'TSLA', 'NVDA', 'JNJ', 'JPM', 'V',
  'WMT', 'DIS', 'PFE', 'NFLX', 'KO', 'BAC', 'ADBE', 'PYPL', 'MCD', 'HD',
  'INTC', 'CSCO', 'CMCSA', 'PEP', 'T'
];

const generateRandomPrice = () => {
  return (Math.random() * (1000 - 1) + 1).toFixed(2);
};

const generateRandomTime = () => {
  const date = new Date();
  return date.toLocaleTimeString();
};

const generateInitialStockData = () => {
  return symbols.map(symbol => ({
    companyName: `${symbol} Company`,
    symbol: symbol,
    latestPrice: generateRandomPrice(),
    high: generateRandomPrice(),
    currency: 'USD',
    latestTime: generateRandomTime()
  }));
};

const StockMarketDashboard = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites) || [];
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const initialStockData = generateInitialStockData();
    dispatch(setStockData(initialStockData));
  }, [dispatch]);

  const handleAddToFavorites = (symbol) => {
    if (favorites.includes(symbol)) {
      dispatch(removeFromFavorites(symbol));
    } else {
      dispatch(addToFavorites(symbol));
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const sortStocks = (a, b) => {
    if (sortOrder === 'asc') {
      return a.latestPrice - b.latestPrice;
    } else if (sortOrder === 'desc') {
      return b.latestPrice - a.latestPrice;
    }
    return 0;
  };

  const filteredAndSortedStocks = useSelector((state) =>
    state.stockData
      .sort(sortStocks)
      .filter(
        (stock) =>
          stock.companyName.toLowerCase().includes(searchText.toLowerCase()) ||
          stock.symbol.toLowerCase().includes(searchText.toLowerCase())
      )
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Stock Market Dashboard</Text>
      </View>
      <View style={styles.postheader}>
        <View style={styles.row}>
          <Text style={styles.postheaderText}>Search Stock</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            onChangeText={handleSearch}
            value={searchText}
          />
        </View>
        <View style={styles.filterRow}>
          <TouchableOpacity onPress={() => setSortOrder('asc')} style={styles.sortButton}>
            <Text style={styles.sortButtonText}>Sort Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSortOrder('desc')} style={styles.sortButton}>
            <Text style={styles.sortButtonText}>Sort High to Low</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.stockList}>
        {filteredAndSortedStocks.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.stockItem}
            onPress={() => handleAddToFavorites(item.symbol)}
          >
            <Text style={styles.companyName}>{item.companyName}</Text>
            <Text>{`Symbol: ${item.symbol}`}</Text>
            <Text>{`Latest Price: ${item.latestPrice}`}</Text>
            <Text>{`High: ${item.high}`}</Text>
            <Text>{`Currency: ${item.currency}`}</Text>
            <Text style={styles.favoritesButtonText}>
              {favorites.includes(item.symbol) ? 'Remove from Favorites' : 'Add to Favorites'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'maroon',
    padding: 20,
  },
  header: {
    backgroundColor: 'darkred',
    padding: 20,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  postheader: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  postheaderText: {
    fontSize: 18,
    color: 'white',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortButton: {
    backgroundColor: 'darkred',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  sortButtonText: {
    color: 'white',
  },
  stockList: {
    marginBottom: 20,
  },
  stockItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  favoritesButtonText: {
    color: 'darkred',
    marginTop: 5,
  },
});

export default StockMarketDashboard;
