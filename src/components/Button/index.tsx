import { TouchableOpacityProps } from "react-native";
import { ButtonVariant, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: ButtonVariant;
};

export const Button = ({
  variant = "PRIMARY",
  title,
  ...props
}: ButtonProps) => {
  return (
    <Container {...props} variant={variant}>
      <Title>{title}</Title>
    </Container>
  );
};
