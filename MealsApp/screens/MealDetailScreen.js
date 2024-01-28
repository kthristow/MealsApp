import { Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  <Text>Meal Details {mealId}</Text>;
}

export default MealDetailScreen;
