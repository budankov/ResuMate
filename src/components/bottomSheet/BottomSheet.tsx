import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { colors } from "../../styles/colors";

export const AppBottomSheet = ({
  sheetRef,
  sheetSnapPoints = ["90%"],
  onDismiss,
  children,
}: {
  sheetRef: React.Ref<any>;
  sheetSnapPoints?: string[];
  onDismiss?: () => void;
  children: React.ReactNode;
}) => {
  const snapPoints = useMemo(() => sheetSnapPoints, [sheetSnapPoints]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close"
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={sheetRef}
      backgroundStyle={{ backgroundColor: colors.primary }}
      handleIndicatorStyle={{ backgroundColor: "#ccc", width: 60 }}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      onDismiss={onDismiss}
    >
      {children}
    </BottomSheetModal>
  );
};
