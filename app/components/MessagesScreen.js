import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from './ListItem';
import Screen from './Screen';
import ListItemSeparator from './ListItemSeparator';
import ListItemDeleteAction from './ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'Louis Wong',
    description:
      'Hey! I am interested in this item. Is it available> When can i pick it up?',
    image: require('../assets/louis.png'),
  },
  {
    id: 2,
    title: 'Louis Wong',
    description: 'How much are you willing to lower your item by?',
    image: require('../assets/louis.png'),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
    console.log('message deleted');
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/louis.png'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
