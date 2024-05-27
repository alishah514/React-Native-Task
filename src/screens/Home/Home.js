import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, View, Button, Text} from 'react-native';
import Api from '../../services/Api';
import {EndPoints} from '../../constants/EndPoints';
import styles from './styles';
import PostList from '../../Components/PostList/PostList';
import TaskList from '../../Components/TaskList/TaskList';
import {Colors} from '../../constants/Colors';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await Api.request('get', EndPoints.posts);
      if (response) {
        setPosts(response);
      }
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  const searchFilter = text => {
    setSearchText(text);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search by title"
        placeholderTextColor={Colors.placeholderColorDark}
        onChangeText={searchFilter}
        value={searchText}
      />
      <PostList
        posts={posts}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        searchText={searchText}
      />
      {selectedPost && (
        <View style={styles.padding20}>
          <Text style={styles.fontBold}>{selectedPost?.title}</Text>
          <Text>{selectedPost?.body}</Text>
        </View>
      )}

      <View style={styles.padding10}>
        <TextInput
          placeholder="Enter task"
          onChangeText={text => setNewTask(text)}
          value={newTask}
          style={styles.textInput}
        />
        <Button title="Add Task" onPress={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
