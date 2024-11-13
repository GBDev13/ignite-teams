import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

type FilterProps = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
};

export const Filter = ({ title, isActive, ...props }: FilterProps) => {
  return (
    <Container {...props} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
};
