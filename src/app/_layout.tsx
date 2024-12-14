import React from "react";

import { Stack } from "expo-router";

import { colors } from "@/styles/theme"
import { 
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"

import { Loading } from "@/components/loading";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {

    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold 
    });

    if (!fontsLoaded) {
        return <Loading />
    }

    return <>
    <StatusBar 
        style="dark" 
        translucent 
        backgroundColor="transparent" 
    />

    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray[100] }}>
        <Stack 
            screenOptions={{ 
                headerShown: false,
                contentStyle: {
                    backgroundColor: colors.gray[100], 
                } 
            }}
        />
    </SafeAreaView>
</>

}