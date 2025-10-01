// components/squareCharacter.tsx
import {Pressable, Image} from "react-native";

export default function SquareCharacter({image, onPress}: {image: any; onPress: () => void}) {
    return (
        <Pressable onPress={onPress}>
            <Image source={image} />
        </Pressable>
    );    
}