import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";
import { AppError } from "@utils/AppError";

export const playerAddByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.some(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists) {
      throw new AppError("Essa pessoa já está adicionada em um time aqui.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
};
