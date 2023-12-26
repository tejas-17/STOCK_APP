import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend } from 'react-native-chart-kit';
import { View, Text } from 'react-native';

const StockDataChart = () => {

    const stockData = useSelector((state) => state.stockData) || [];

    // Extracting company names, latest prices, and highest prices from Redux stockData
    const companyNames = stockData.map(item => item.companyName);
    const latestPrices = stockData.map(item => item.latestPrice);
    const highestPrices = stockData.map(item => item.high);

    // Chart data
    const chartData = {
        labels: companyNames,
        datasets: [
            {
                data: latestPrices,
                color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
                strokeWidth: 2,
            },
            {
                data: highestPrices,
                color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                strokeWidth: 2,
            },
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
    };

    return (
        <View>
            <View style={{ backgroundColor: '#1890ff', padding: 20, alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Bar Chart : Company Prices</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', minHeight: '60vh', margin: 20 }}>
                <BarChart
                    data={chartData}
                    width={350}
                    height={220}
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                    fromZero={true}
                />
            </View>
        </View>
    );
};

export default StockDataChart;
