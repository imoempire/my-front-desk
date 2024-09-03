import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { BackButton } from "@/components/Buttons";
import { ScreenHeight } from "@/constants/Styles";
import { HelpButton, SearchBox, Selectors } from "@/components/others";
import { departmentProps, staffProps } from "@/constants/FormProps";
import { Colors } from "@/constants/Colors";
import EnhancedAllDepartment from "@/components/Reactive/AllDepartment";
import AllStaff from "@/components/Reactive/AllStaff";
import { useDepartments, useStaffs } from "@/hooks/useDatabaseHook";
import { StaffAttributes } from "@/DB/models/Staff";
import { DapartmentAttributes } from "@/DB/models/Departments";
import AllDepartment from "@/components/Reactive/AllDepartment";

const Staffdepart = () => {
  // FROM WATERMELON
  const { data: staffs, loading, error } = useStaffs();
  const {
    data: departments,
    error: D_error,
    loading: D_isLoading,
  } = useDepartments();

  // Search
  const [seachTerm, setSearchTerm] = useState<string>("");
  // Filtered
  const [filteredStaff, setFilteredStaff] = useState<StaffAttributes[]>([]);
  const [filteredDepartment, setFilteredDepartment] = useState<
    DapartmentAttributes[]
  >([]);

  const [selectedSlide, setSelectedSlide] = useState<"STAFF" | "DEPARTMENT">(
    "STAFF"
  );

  // SIDE EFFECTS
  useEffect(() => {
    if (seachTerm === "" && selectedSlide === "STAFF") {
      setFilteredStaff(staffs);
    } else {
      const filtered = staffs?.filter((item: any) =>
        item?.fullName.toLowerCase().includes(seachTerm.toLowerCase())
      );
      setFilteredStaff(filtered);
    }
  }, [seachTerm, staffs]);

  useEffect(() => {
    if (seachTerm === "" && selectedSlide === "DEPARTMENT") {
      setFilteredDepartment(departments);
    } else {
      const filtered = departments?.filter((item: any) =>
        item?.departmentName.toLowerCase().includes(seachTerm.toLowerCase())
      );
      setFilteredDepartment(filtered);
    }
  }, [seachTerm, departments]);

  console.log(filteredDepartment.length, "filteredStaff");

  return (
    <ThemedView style={{ gap: 30, paddingHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          minHeight: ScreenHeight / 15,
        }}
      >
        <BackButton />
        <SearchBox seachTerm={seachTerm} setSearchTerm={setSearchTerm} />
        <HelpButton screen={"/(app)/modal"} />
      </View>
      <View style={{ alignItems: "center", gap: 20 }}>
        <ThemedText
          style={{
            color: Colors.darkBlue,
            fontFamily: "SemiBold",
            fontSize: 36,
            lineHeight: 40,
          }}
        >
          Select who you came to meet
        </ThemedText>
        <Selectors
          selected={selectedSlide}
          onChange={(value: "STAFF" | "DEPARTMENT") => setSelectedSlide(value)}
        />
      </View>
      <View style={{ flex: 1, paddingTop: 20 }}>
        {selectedSlide === "STAFF" && (
          <AllStaff staff={filteredStaff} loading={loading} />
        )}
        {selectedSlide === "DEPARTMENT" && (
          <AllDepartment
            allDepartment={filteredDepartment}
            loading={D_isLoading}
          />
        )}
      </View>
    </ThemedView>
  );
};

export default Staffdepart;

const styles = StyleSheet.create({});
