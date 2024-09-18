import { View, StyleSheet, Text } from "react-native";

import * as AppleAuthentication from "expo-apple-authentication";

export default function HomeScreen() {
  return (
    <View className="flex justify-center h-full items-center text-center dark:bg-black bg-white">
      <Text className="font-extrabold text-4xl dark:text-white">
        Keep Tf up
      </Text>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        className="w-[200px] h-[100px]"
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            console.log(credential);
          } catch (e: any) {
            console.log(e);
            if (e.code === "ERR_REQUEST_CANCELED") {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
    </View>
  );
}
