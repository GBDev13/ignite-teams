import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconVariant = "PRIMARY" | "DESTRUCTIVE";

type Props = {
  variant: ButtonIconVariant;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, variant }) => ({
  size: 24,
  color: variant === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;