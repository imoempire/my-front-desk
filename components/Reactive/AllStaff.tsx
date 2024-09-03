import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StaffAttributes } from "@/DB/models/Staff";
import { StaffCard } from "../Card";
import { EmptyLoader } from "../others";
import { CancelButton } from "../Buttons";
import { router } from "expo-router";
import { WhiteSpace } from "@/constants/Space";

const AllStaff = ({
  staff,
  loading,
}: {
  staff: StaffAttributes[];
  loading: boolean;
}) => {
  const handleOpenModal = () => {
    router.push("/(app)/");
  };

  const [AllStaff, setAllStaff] = useState<StaffAttributes[]>([]);

  useEffect(() => {
    let restructure = staff?.reduce((acc: StaffAttributes[], staff) => {
      acc.push({
        fullName: staff.fullName,
        email: staff.email,
        gender: staff.gender,
        phoneNumber: staff.phoneNumber,
        profilePhoto: staff.profilePhoto,
        departmentId: staff.departmentId,
        departmentName: staff.departmentName,
        role: staff.role,
        organizationId: staff.organizationId,
        organizationName: staff.organizationName,
        staffId: staff.staffId,
        title: staff.title,
      });
      return acc;
    }, []);
    setAllStaff(restructure);
  }, [staff]);


  return (
    <View style={{ flex: 1 }}>
      {AllStaff?.length !== 0 && (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.grid}>
            {AllStaff?.map((item, index) => (
              <View key={index} style={styles.item}>
                <StaffCard item={item} side="STAFF" />
              </View>
            ))}
          </View>
          <WhiteSpace size={10} />
        </ScrollView>
      )}

      {AllStaff?.length === 0 && loading && (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      )}
      {AllStaff?.length === 0 && (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EmptyLoader title="No Staff Found" />
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
export default AllStaff;

// const enhance = withObservables(["staff"], ({}) => ({
//   staff: staffsCollection.query(),
// }));

// const EnhancedAllStaff = enhance(AllStaff);
