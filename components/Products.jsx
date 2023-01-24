import styled from "styled-components/native";

const Product = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding: 15px;
  margin: 10px;
`;

const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  margin-right: 20px;
`;

const ProductDetails = styled.View`
    flex: 1;
    justify-content: center;
`;

const ProductTitle = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const Price = styled.Text`
  text-align: center;
  font-size: 25px;
`;

const PostDescription = styled.Text`
  padding-top: 20px;
`;

export const Products = ({title, price, imageUrl, description}) => {
  return (
    <Product>
      <ProductImage
        source={{ uri: imageUrl }}
      />
      <ProductDetails>
        <ProductTitle>{title}</ProductTitle>
        <Price>{price} $</Price>
        <PostDescription>{description}</PostDescription>
      </ProductDetails>
    </Product>
  );
};
