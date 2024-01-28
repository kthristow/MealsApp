import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCateroryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      key={Math.random()}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCateroryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
