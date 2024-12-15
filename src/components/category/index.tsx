import { categoriesIcons } from "@/utils/categories-icons";
import { Text, TouchableWithoutFeedbackProps, View } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/colors";
import { TouchableWithoutFeedback } from "@gorhom/bottom-sheet";

type Props = TouchableWithoutFeedbackProps & {
    iconId: string,
    isSelected?: boolean,
    name: string;
    onPress?: ()=>void;
}

export function  Category({ name, iconId, isSelected = false, ...rest}: Props) {

    const Icon = categoriesIcons[iconId];

    return (
        <TouchableWithoutFeedback style={[s.container, isSelected && s.containerSelected ]} {...rest}>
            <Icon size={16} color={colors.gray[isSelected ? 100 : 400]}/>
            <Text style={[s.name, isSelected && s.nameSelected]} >{name}</Text>
        </TouchableWithoutFeedback>
    );
}