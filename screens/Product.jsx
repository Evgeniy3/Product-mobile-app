import React from 'react';
import { View, ActivityIndicator, Text } from "react-native";
import styled from "styled-components";
import axios from "axios";

const ProductImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
`;

const ProductTitle = styled.Text`
  font-size: 25px;
  line-height: 24px;
  margin-bottom: 15px;
`;

const Price = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const PostDescription = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullProduct = ({ route, navigation }) => {
  const [item, setItem] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const { id, title } = route.params;

  const fetchProduct = () => {
    
    navigation.setOptions({
        title,
    });

    setIsLoading(true);
    axios
      .get('https://dummyjson.com/products/' + id)
      .then(({ data }) => {
        setItem(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить продукт");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchProduct, [])

  console.log(item);

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
    <View style={{ padding: 20, marginTop: 20 }}>
      <ProductImage source={{ uri: item.images[1] }} />
      <ProductTitle>{item.brand} {item.title}</ProductTitle>
      <Price>{item.price} $</Price>
      <PostDescription>
        {item.description}
      </PostDescription>
    </View>
  );
};
