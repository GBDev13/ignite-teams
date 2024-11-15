import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles"

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
}

export const PlayerCard = ({ name, onRemove }: PlayerCardProps) => {
  return (
    <Container>
      <Icon name="person" />

      <Name>
        {name}
      </Name>

      <ButtonIcon
        variant="DESTRUCTIVE"
        icon="close"
        onPress={onRemove}
      />
    </Container>
  )
}