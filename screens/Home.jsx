import axios from 'axios';
import React from 'react';
import { Text, FlatList, View, Alert, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Products } from '../components/Products.jsx';

export const Home = ({ navigation }) => {
  const [items, setItems] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  const fetchProducts = () => {
    setIsLoading(true)
    axios.get('https://dummyjson.com/products')
    .then(({data}) => {
      setItems(data.products)
    })
    .catch(err => {
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось получить продукт')
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  React.useEffect(fetchProducts, [])

  if(isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size='large'/>
        <Text style={{
        marginTop: 15,
      }}>Загрузка...</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList 
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchProducts}/>}
        data={items}
        renderItem={({item}) => 
        <TouchableOpacity onPress={() => navigation.navigate('FullProduct', {id: item.id , title: item.title})}>
          <Products
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.images[0]}
            description={item.description}
          />
        </TouchableOpacity>
          }
      />
    </View>
  );
}
