import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { DepartmentCard } from "../Card";
import { EmptyLoader } from "../others";
import { CancelButton } from "../Buttons";
import { DapartmentAttributes } from "@/DB/models/Departments";

const AllDepartment = ({
  allDepartment,
  loading,
}: {
  allDepartment: DapartmentAttributes[];
  loading: boolean;
}) => {
  const handleOpenModal = () => {};
  return (
    <View style={[styles.container, { width: "100%" }]}>
      {allDepartment?.length !== 0 && (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.grid}>
            {allDepartment?.map((item, index) => (
              <View key={index} style={styles.item}>
                <DepartmentCard item={item} side="STAFF" />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
      {allDepartment?.length === 0 && (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EmptyLoader title="No Department Found" />
          <View
            style={{
              flex: 0.8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CancelButton onPress={handleOpenModal} />
          </View>
        </View>
      )}
      {/* <AlertModal isVisible={showModal} closeMenu={handleCloseModal} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 30,
  },
  item: {
    width: "23%",
  },
});

export default AllDepartment;
// const enhance = withObservables(["departments"], ({}) => ({
//   departments: departmentsCollection.query(),
// }));

// const EnhancedAllDepartment = enhance(AllDepartment);
