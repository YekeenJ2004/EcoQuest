import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, Modal, FlatList } from 'react-native';
import { COLORS } from '@/styles/colors';
import { Camera, CameraType, CameraCapturedPicture } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

interface Friend {
  id: string;
  name: string;
  imageUrl: string;
}

const HomePage: React.FC = () => {
  const [points, setPoints] = useState<number>(100);
  const [friendsFeed, setFriendsFeed] = useState<Friend[]>([
    { id: '1', name: 'John', imageUrl: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Jane', imageUrl: 'https://via.placeholder.com/150' },
  ]);
  const [newImage, setNewImage] = useState<string>('');
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(false);

  const cameraRef = useRef<Camera | null>(null);

  // Request Camera Permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === 'granted');
    })();
  }, []);

  // Helper function to validate image URL
  const isValidImageUrl = (url: string): boolean => /\.(jpeg|jpg|gif|png)$/i.test(url);

  const handleUpload = (): void => {
    if (!newImage.trim()) {
      Alert.alert('Input Error', 'Please provide an image.');
      return;
    }

    if (!isValidImageUrl(newImage)) {
      Alert.alert('Invalid URL', 'Please enter a valid image URL ending with .jpg, .jpeg, .png, or .gif');
      return;
    }

    setFriendsFeed([{ id: `${friendsFeed.length + 1}`, name: 'You', imageUrl: newImage }, ...friendsFeed]);
    setPoints(points + 10);
    setNewImage('');
    Alert.alert('Success', 'Challenge uploaded! You earned 10 points.');
  };

  const handleCapture = async (): Promise<void> => {
    if (cameraRef.current) {
      try {
        const photo: CameraCapturedPicture = await cameraRef.current.takePictureAsync();
        setNewImage(photo.uri);
        setShowCamera(false);
      } catch (error) {
        Alert.alert('Error', 'Failed to capture photo.');
        console.error(error);
      }
    }
  };

  const openCamera = (): void => {
    if (cameraPermission) {
      setShowCamera(true);
    } else {
      Alert.alert('Permission Required', 'Camera access is required to take photos.');
    }
  };

  const pickImageFromGallery = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setNewImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to EcoQuest!</Text>
      <Text style={styles.points}>Your Points: {points}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Open Camera" onPress={openCamera} color={COLORS.yellow} />
        <Button title="Pick from Gallery" onPress={pickImageFromGallery} color={COLORS.yellow} />
      </View>

      {newImage ? (
        <Image source={{ uri: newImage }} style={styles.previewImage} />
      ) : (
        <Text style={styles.noImageText}>No image selected</Text>
      )}

      <Button title="Upload Challenge" onPress={handleUpload} color={COLORS.yellow} />

      <FlatList
        data={friendsFeed}
        renderItem={({ item }) => (
          <View style={styles.feedItem}>
            <Text style={styles.feedText}>{item.name} uploaded a challenge:</Text>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.subHeader}>Friends' Activity Feed</Text>}
      />

      {/* Camera Modal */}
      {showCamera && (
        <Modal animationType="slide" transparent={false} visible={showCamera}>
          <Camera
            style={{ flex: 1 }}
            type={CameraType.back}
            ref={(ref) => {
              cameraRef.current = ref; // Set the cameraRef correctly
            }}
          >
            <View style={styles.cameraButtonContainer}>
              <Button title="Capture" onPress={handleCapture} color={COLORS.yellow} />
              <Button title="Close" onPress={() => setShowCamera(false)} color="red" />
            </View>
          </Camera>
        </Modal>
      )}
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
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.yellow,
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.yellow,
    marginVertical: 10,
  },
  points: {
    fontSize: 20,
    color: COLORS.yellow,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  noImageText: {
    textAlign: 'center',
    color: COLORS.yellow,
    marginBottom: 20,
  },
  feedItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  feedText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cameraButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
});

export default HomePage;
