import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../reduxComponents/favoritesActions'; // Import the action creator

const MyDashboard = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites) || [];
  const stockData = useSelector((state) => state.stockData) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  console.log('Favorites:', favorites);
  console.log('Stock Data:', stockData);

  const handleRemoveFromFavorites = (symbol) => {
    dispatch(removeFromFavorites(symbol));
  };

  const favoriteStocks = stockData.filter((stock) => favorites.includes(stock.symbol));

  const getRowClassName = (index) => {
    return index % 2 === 0 ? 'table-row-white' : 'table-row-black';
  };

  const renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: getRowClassName(index) }}>
      <Text>{(currentPage - 1) * pageSize + index + 1}</Text>
      <Text>{ index + 1}</Text>
      <Text>{item.companyName}</Text>
      <Text>{item.symbol}</Text>
      <Text>{item.latestPrice}</Text>
      <Text>{item.high}</Text>
      <Text>{item.currency}</Text>
      <Button title="Remove from Favorites" onPress={() => handleRemoveFromFavorites(item.symbol)} />
    </View>
  );

  return (
    <View>
      <View style={{ backgroundColor: '#1890ff', padding: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>My Dashboard</Text>
      </View>
      <FlatList
        data={favoriteStocks}
        renderItem={renderItem}
        keyExtractor={(item) => item.symbol}
        extraData={currentPage}
        onEndReachedThreshold={0.5}
        onEndReached={() => setCurrentPage((prevPage) => prevPage + 1)}
      />
    </View>
  );
};

export default MyDashboard;
