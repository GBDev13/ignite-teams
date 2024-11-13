import { TouchableOpacityProps } from "react-native";
import { ButtonIconVariant, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  variant?: ButtonIconVariant;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const ButtonIcon = ({
  variant = "PRIMARY",
  icon,
  ...props
}: ButtonIconProps) => {
  return (
    <Container {...props} variant={variant}>
      <Icon name={icon} variant={variant} />
    </Container>
  );
};
