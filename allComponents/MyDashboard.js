import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../reduxComponents/favoritesActions';

const MyDashboard = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites) || [];
  const stockData = useSelector((state) => state.stockData) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handleRemoveFromFavorites = (symbol) => {
    dispatch(removeFromFavorites(symbol));
  };

  const favoriteStocks = stockData.filter((stock) => favorites.includes(stock.symbol));
  const paginatedStocks = favoriteStocks.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const renderItem = ({ item, index }) => (
    <View style={styles.stockItem}>
      <Text style={styles.companyName}>{`#${index + 1} - ${item.companyName}`}</Text>
      <Text>{`Symbol: ${item.symbol}`}</Text>
      <Text>{`Latest Price: ${item.latestPrice}`}</Text>
      <Text>{`High: ${item.high}`}</Text>
      <Text>{`Currency: ${item.currency}`}</Text>
      <Button
        title="Remove from Favorites"
        onPress={() => handleRemoveFromFavorites(item.symbol)}
        color="orange"
      />
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Dashboard</Text>
      </View>
      <FlatList
        data={paginatedStocks}
        renderItem={renderItem}
        keyExtractor={(item) => item.symbol}
        ListEmptyComponent={<Text>No favorite stocks found.</Text>}
      />
      <View style={styles.pagination}>
        <Button
          title="Previous"
          disabled={currentPage === 1}
          onPress={() => setCurrentPage((prevPage) => prevPage - 1)}
        />
        <Text>{`Page ${currentPage}`}</Text>
        <Button
          title="Next"
          disabled={favoriteStocks.length <= currentPage * pageSize}
          onPress={() => setCurrentPage((prevPage) => prevPage + 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#1890ff',
    padding: 20,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stockItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default MyDashboard;
