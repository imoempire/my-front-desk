import { StyleSheet, View } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { HomeCard } from "@/components/Card";
import { Colors } from "@/constants/Colors";
import { homecard } from "@/constants/ComponentsProps";
import { HelpButton, PoweredBy } from "@/components/others";
import { TitleLabel } from "@/components/Label";
import { MaterialIcons } from "@expo/vector-icons";
import { useDepartments, useGuests, useStaffs } from "@/hooks/useDatabaseHook";
import { useSession } from "@/Provider/Auth";
// DATA
import useGetAllStaffMutations from "@/API/Services/Data/OrgUser/use-get-all-staff.mutation";
import useGetAllDepartmentMutations from "@/API/Services/Data/OrgUser/get-all-department";
import useSaveStaffData from "@/DB/Functions/staff";
import { useEffect } from "react";
import useSaveDepartmentData from "@/DB/Functions/department";

let Cards: { [key: number]: homecard } = {
  0: {
    buttonColor: Colors.greenBackground,
    icon: "login",
    title: `New guest\n sign in`,
    route: "/(app)/signin",
  },
  1: {
    buttonColor: Colors.blue,
    icon: "person",
    title: `Returning guest\n sign in`,
    route: "/(app)/signin",
  },
  2: {
    buttonColor: Colors.redBackground,
    icon: "logout",
    title: `Guests\n sign out`,
    route: "/(app)/signin",
  },
};

export default function HomeScreen() {
  // *HOOKS
  const { signOut, session } = useSession();
  const itemCount = 3;
  const items = Array.from({ length: itemCount }, (_, index) => Cards[index]);

  // FETCH DATA
  const { data: staffs, loading, error } = useStaffs();
  const {
    data: departments,
    error: D_error,
    loading: D_isLooading,
  } = useDepartments();

  const {
    data: ALLSTAFF,
    isSuccess,
    refetch,
    error: AS_error,
  } = useGetAllStaffMutations();

  const {
    data: ALLDEPARTMENT,
    isSuccess: AD_success,
    refetch: AD_refetch,
    error: AD_error,
  } = useGetAllDepartmentMutations();

  const { saveStaffData } = useSaveStaffData();
  const { saveDepartmentData } = useSaveDepartmentData();
  useEffect(() => {
    if (ALLSTAFF && isSuccess) {
      saveStaffData(ALLSTAFF);
    }
  }, [ALLSTAFF]);

  useEffect(() => {
    if (ALLDEPARTMENT && AD_success) {
      saveDepartmentData(ALLDEPARTMENT);
    }
  }, [ALLDEPARTMENT]);

  return (
    <ThemedView style={{ gap: 20 }}>
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <MaterialIcons
          onPress={() => signOut()}
          name="power-settings-new"
          size={30}
          color="black"
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <View>
          <TitleLabel title="Welcome" subtitle="Good to see you" />
        </View>
        <View>
          <HelpButton screen={"/(app)/modal"} />
        </View>
      </View>
      <View
        style={{
          flex: 1.2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {items?.map((item, index) => {
          return <HomeCard item={item} key={index} />;
        })}
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 20,
          paddingVertical: 20,
        }}
      >
        <PoweredBy />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
