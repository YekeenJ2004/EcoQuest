// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type RootStackParamList = {
//   Home: undefined;
// };

// type CombinedAuthPageProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
// };

// export default function CombinedAuthPage({ navigation }: CombinedAuthPageProps) {
//   const [isLogin, setIsLogin] = useState<boolean>(true);
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [confirmPassword, setConfirmPassword] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);


//   const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

 
//   const handleLogin = () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter both email and password.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Please enter a valid email address.');
//       return;
//     }

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       Alert.alert('Success', 'Logged in successfully!');
//       navigation.replace('Home');
//     }, 1500);
//   };


//   const handleSignup = () => {
//     if (!name || !email || !password || !confirmPassword) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Please enter a valid email address.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match.');
//       return;
//     }

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       Alert.alert('Success', 'Account created successfully. Please log in.');
//       setIsLogin(true); 
//     }, 1500);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>EcoQuest</Text>

//       {/* Toggle Buttons */}
//       <View style={styles.toggleContainer}>
//         <TouchableOpacity
//           style={[styles.toggleButton, isLogin && styles.activeButton]}
//           onPress={() => setIsLogin(true)}
//         >
//           <Text style={isLogin ? styles.activeButtonText : styles.toggleButtonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.toggleButton, !isLogin && styles.activeButton]}
//           onPress={() => setIsLogin(false)}
//         >
//           <Text style={!isLogin ? styles.activeButtonText : styles.toggleButtonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Login Form */}
//       {isLogin ? (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//           <Button
//             title={loading ? 'Logging in...' : 'Log In'}
//             color="#4CAF50"
//             onPress={handleLogin}
//             disabled={loading}
//           />
//         </>
//       ) : (
        
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Full Name"
//             value={name}
//             onChangeText={setName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//             secureTextEntry
//           />
//           <Button
//             title={loading ? 'Signing up...' : 'Sign Up'}
//             color="#4CAF50"
//             onPress={handleSignup}
//             disabled={loading}
//           />
//         </>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#F0FFF0',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#2E7D32',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   toggleButton: {
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#2E7D32',
//     borderRadius: 8,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
//   activeButton: {
//     backgroundColor: '#2E7D32',
//   },
//   toggleButtonText: {
//     color: '#2E7D32',
//     fontWeight: 'bold',
//   },
//   activeButtonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 50,
//     borderColor: '#2E7D32',
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 20,
//   },
// });
