import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>user_name</Text>
        <View style={styles.headerIcons}>
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/add.png' }} style={styles.icon} />
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/menu.png' }} style={styles.icon} />
        </View>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.profilePictureContainer}>
          <View style={styles.profilePicture} />
          <View style={styles.badgeContainer}>
            <View style={styles.badge} />
          </View>
        </View>
        <View style={styles.profileStats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>12k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2k</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
      <Text style={styles.realName}>Real Name</Text>
      <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tab}>
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/grid.png' }} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/user.png' }} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon.png' }} style={styles.tabIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {Array.from({ length: 9 }).map((_, index) => (
          <View key={index} style={styles.gridItem} />
        ))}
      </View>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Feed')}>
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/home.png' }} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Feed')}>
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/search.png' }} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Feed')}>
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/add.png' }} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Feed')}>
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/heart.png' }} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/user.png' }} style={styles.navIcon} />       
         
        </TouchableOpacity>
      </View>    


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  profileInfo: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  profilePictureContainer: {
    position: 'relative',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007FFF',
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#888',
  },
  editProfileButton: {
    marginHorizontal: 15,
    marginTop: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  editProfileText: {
    color: '#000',
  },
  realName: {
    paddingHorizontal: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    paddingHorizontal: 15,
    color: '#888',
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    paddingVertical: 10,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '33%',
    height: 120,
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#fff',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },

});

export default Profile;
