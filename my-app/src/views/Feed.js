import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const stories = [
  { id: 1, name: 'Your Story', isUser: true },
  { id: 2, name: 'Lorem', isUser: false },
  { id: 3, name: 'Ipsum', isUser: false },
  { id: 4, name: 'Dolor Sit', isUser: false },
  { id: 5, name: 'Sit Amet', isUser: false },
];

const Feed = ( { navigation } ) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/camera.png' }} style={styles.cameraIcon} />
          <Image source={{ uri: 'https://img.icons8.com/material-rounded/24/000000/filled-sent.png' }} style={styles.messageIcon} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
          {stories.map(story => (
            <View key={story.id} style={styles.story}>
              <View style={story.isUser ? styles.userStoryBorder : styles.storyBorder}>
                <View style={styles.storyInner}>
                  <Text style={styles.storyText}>{story.name}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postProfilePic} />
            <Text style={styles.postUsername}>User_name</Text>
          </View>
          <View style={styles.postImage} />
          <View style={styles.postFooter}>
            <View style={styles.iconsContainer}>
              <TouchableOpacity>
                <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/filled-like.png' }} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/speech-bubble.png' }} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/sent.png' }} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookmarkIcon}>
                <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon.png' }} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.likesText}>218 likes</Text>
            <Text style={styles.postDescription}>
              <Text style={styles.postUsername}>User_name </Text>
              Lorem, ipsum dolor sit amet, consectetur adipiscing elit...
              <Text style={styles.moreText}> more</Text>
            </Text>
            <TouchableOpacity>
              <Text style={styles.viewCommentsText}>View all comments</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cameraIcon: {
    width: 30,
    height: 30,
  },
  messageIcon: {
    width: 30,
    height: 30,
  },
  storiesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  story: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyBorder: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#FF4500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userStoryBorder: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#007FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  post: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  postUsername: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  postFooter: {
    paddingVertical: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  bookmarkIcon: {
    marginLeft: 'auto',
  },
  likesText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    marginBottom: 5,
  },
  moreText: {
    color: '#999',
  },
  viewCommentsText: {
    color: '#999',
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

export default Feed;
