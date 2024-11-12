import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@/styles/colors' 

const LeaderboardPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Leaderboard</Text>
            <Text style={styles.firstPlace}>1st Place: John</Text>
            <Text style={styles.secondPlace}>2nd Place: Jane</Text>
            <Text style={styles.thirdPlace}>3rd Place: Alex</Text>
            <Text style={styles.otherPlayers}>Other Players:</Text>
            <Text style={styles.players}>Player 4, Player 5, Player 6...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.forestGreen, 
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.yellow,
        marginBottom: 20,
    },
    firstPlace: {
        fontSize: 24,
        color: COLORS.yellow, 
        fontWeight: 'bold',
    },
    secondPlace: {
        fontSize: 20,
        color: COLORS.yellow, 
    },
    thirdPlace: {
        fontSize: 18,
        color: COLORS.yellow, 
    },
    otherPlayers: {
        fontSize: 16,
        color: COLORS.yellow, 
        marginTop: 20,
    },
    players: {
        fontSize: 14,
        color: COLORS.yellow, 
    },
});

export default LeaderboardPage;