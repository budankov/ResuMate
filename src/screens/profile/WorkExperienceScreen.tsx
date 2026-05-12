import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { nanoid } from "@reduxjs/toolkit";
import React, { useCallback, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { s } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { AppBottomSheet } from "../../components/bottomSheet/BottomSheet";
import AddButton from "../../components/buttons/AddButton";
import CardItem from "../../components/card/CardItem";
import WorkExperienceForm from "../../components/forms/WorkExperienceForm";
import {
  closeEditor,
  openEditor,
  removeCard,
  setCards,
} from "../../store/slices/cardsSlice";
import { saveWorkExperience } from "../../store/slices/profileSlice";
import { RootState } from "../../store/store";
import { colors } from "../../styles/colors";

type WorkExperience = RootState["profile"]["workExperience"][number];
type WorkExperienceCard = { id: string; data: WorkExperience };

const EMPTY_WORK_EXPERIENCE: WorkExperienceCard[] = [];

const WorkExperienceScreen = () => {
  const dispatch = useDispatch();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const experienceList = useSelector(
    (state: RootState) =>
      (state.cards.records?.workExperience as
        | WorkExperienceCard[]
        | undefined) ?? EMPTY_WORK_EXPERIENCE,
  );

  const profile = useSelector((state: RootState) => state.profile);

  const openSheet = useCallback(
    (card: WorkExperienceCard | null = null) => {
      dispatch(openEditor({ namespace: "workExperience", card }));
      bottomSheetRef.current?.present();
    },
    [dispatch],
  );

  const editCard = (card: WorkExperienceCard) => {
    openSheet(card);
  };

  const deleteCardHandler = (id: string) => {
    const newPayload = experienceList
      .filter((c) => c.id !== id)
      .map((c) => c.data);

    dispatch(removeCard({ namespace: "workExperience", id }));
    dispatch(saveWorkExperience(newPayload));
  };

  const addExperience = () => {
    openSheet(null);
  };

  React.useEffect(() => {
    if (experienceList.length === 0 && profile?.workExperience?.length > 0) {
      const mapped = profile.workExperience.map((item) => ({
        id: nanoid(),
        data: item,
      }));

      dispatch(setCards({ namespace: "workExperience", cards: mapped }));
    }
  }, [dispatch, experienceList, profile?.workExperience]);

  return (
    <View style={styles.container}>
      <FlatList
        data={experienceList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CardItem
            title={item.data.position}
            subTitle={item.data.company}
            startDate={item.data.startDate}
            endDate={item.data.endDate}
            editCard={() => editCard(item)}
            deleteCard={() => deleteCardHandler(item.id)}
          />
        )}
      />

      <View style={styles.floatingButton}>
        <AddButton title="Додати досвід" onPress={addExperience} />
      </View>

      <AppBottomSheet
        sheetRef={bottomSheetRef}
        onDismiss={() => dispatch(closeEditor())}
      >
        <BottomSheetView>
          <WorkExperienceForm
            onClose={() => bottomSheetRef.current?.dismiss()}
          />
        </BottomSheetView>
      </AppBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContent: {
    paddingHorizontal: s(10),
    paddingBottom: 140,
  },
  floatingButton: {
    position: "absolute",
    left: s(10),
    right: s(10),
    bottom: 90,
  },
});

export default WorkExperienceScreen;
