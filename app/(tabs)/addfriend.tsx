import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '@/styles/colors';

const AddFriendsPage = () => {
    const [friendSearch, setFriendSearch] = useState('');
    const [friendsList, setFriendsList] = useState([
        { id: '1', name: 'John' },
        { id: '2', name: 'Jane' },
        { id: '3', name: 'Alex' },
    ]);

    const handleSearch = () => {
        // Logic for searching friends can be added here
        console.log('Searching for:', friendSearch);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add Friends</Text>
            <TextInput
                style={styles.input}
                placeholder="Search for friends"
                value={friendSearch}
                onChangeText={setFriendSearch}
            />
            <Button title="Search" onPress={handleSearch} />
            <FlatList
                data={friendsList}
                renderItem={({ item }) => (
                    <View style={styles.friendItem}>
                        <Text style={styles.friendName}>{item.name}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
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
    input: {
        height: 40,
        borderColor: COLORS.yellow,
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
    friendItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.yellow,
        marginBottom: 10,
    },
    friendName: {
        fontSize: 18,
        color: COLORS.yellow,
    },
});

export default AddFriendsPage;