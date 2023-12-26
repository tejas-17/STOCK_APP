import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const RealTimeStockData = () => {
    const [stockData, setStockData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [buttonText, setButtonText] = useState({});
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const [searchText, setSearchText] = useState('');
    const [sortOrder, setSortOrder] = useState(null);

    useEffect(() => {
        const symbols = [
            'AAPL', 'AMZN', 'GOOGL', 'MSFT', 'FB', 'TSLA', 'NVDA', 'JNJ', 'JPM', 'V',
            'WMT', 'DIS', 'PFE', 'NFLX', 'KO', 'BAC', 'ADBE', 'PYPL', 'MCD', 'HD',
        ];

        const generateRandomPrice = () => {
            return (Math.random() * (1000 - 1) + 1).toFixed(2);
        };

        const generateRandomTime = () => {
            const date = new Date();
            return date.toLocaleTimeString();
        };

        const generateDummyData = () => {
            const data = symbols.map(symbol => ({
                companyName: `${symbol} Company`,
                symbol: symbol,
                latestPrice: generateRandomPrice(),
                high: generateRandomPrice(),
                currency: 'USD',
                latestTime: generateRandomTime()
            }));
            return data;
        };

        const dummyData = generateDummyData();
        setStockData(dummyData);

        const buttonTextObj = dummyData.reduce((acc, stock) => {
            acc[stock.symbol] = favorites.includes(stock.symbol)
                ? 'Remove from Favorites'
                : 'Add to Favorites';
            return acc;
        }, {});
        setButtonText(buttonTextObj);
    }, [favorites]);

    const handleSearch = (value) => {
        setSearchText(value);
    };

    const handleSort = (order) => {
        setSortOrder(order);
    };

    const handleAddToFavorites = (symbol) => {
        if (favorites.includes(symbol)) {
            setFavorites(favorites.filter(fav => fav !== symbol));
        } else {
            setFavorites([...favorites, symbol]);
        }
    };

    const sortStocks = (a, b) => {
        if (sortOrder === 'asc') {
            return a.latestPrice - b.latestPrice;
        } else if (sortOrder === 'desc') {
            return b.latestPrice - a.latestPrice;
        }
        return 0;
    };

    const filteredAndSortedStocks = stockData
        .sort(sortStocks)
        .filter(
            (stock) =>
                stock.companyName.toLowerCase().includes(searchText.toLowerCase()) ||
                stock.symbol.toLowerCase().includes(searchText.toLowerCase())
        );

    const getRowClassName = (index) => {
        return index % 2 === 0 ? 'table-row-white' : 'table-row-black';
    };

    return (
        <View>
            <View style={{ backgroundColor: '#1890ff', padding: 20 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Real-Time Stock Data</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                {/* Search input */}
                <TextInput
                    placeholder="Search by company name or symbol"
                    onChangeText={(text) => handleSearch(text)}
                    value={searchText}
                    style={{ borderWidth: 1, padding: 10, flex: 1 }}
                />

                {/* Sort buttons */}
                <View style={{ flexDirection: 'row' }}>
                    <Button title="Sort Low to High" onPress={() => handleSort('asc')} />
                    <Button title="Sort High to Low" onPress={() => handleSort('desc')} />
                </View>
            </View>

            <FlatList
                data={filteredAndSortedStocks}
                keyExtractor={(item) => item.symbol}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: getRowClassName(index) }}>
                        <Text style={{ flex: 2 }}>{item.companyName}</Text>
                        <Text style={{ flex: 1 }}>{item.symbol}</Text>
                        <Text style={{ flex: 1 }}>{item.latestPrice}</Text>
                        <Text style={{ flex: 1 }}>{item.high}</Text>
                        <Text style={{ flex: 1 }}>{item.currency}</Text>
                        <Button title={buttonText[item.symbol]} onPress={() => handleAddToFavorites(item.symbol)} />
                    </View>
                )}
            />

        </View>
    );
};

export default RealTimeStockData;
