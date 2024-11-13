import { Header } from "@components/Header"
import { Container, Content, Icon } from "./styles"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { groupCreate } from "@storage/group/groupCreate"
import { AppError } from "@utils/AppError"
import { Alert } from "react-native"

export const NewGroup = () => {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  const handleNew = async () => {
    try {
      if (!group.trim()) {
        Alert.alert("Novo Grupo", "Informe o nome da turma.");
        return;
      }

      await groupCreate(group);

      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
        return;
      }

      Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
      console.error(error);
    }
  };
  
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}