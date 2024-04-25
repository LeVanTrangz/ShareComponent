// import {
//   View,
//   Text,
//   StyleProp,
//   ViewStyle,
//   TextStyle,
//   TouchableOpacity,
// } from 'react-native';
// import React, {ReactNode} from 'react';

// interface Props {
//   icon?: ReactNode;
//   text: string;
//   type?: 'primary' | 'text' | 'link';
//   color?: string;
//   styles?: StyleProp<ViewStyle>;
//   textColor?: string;
//   textStyles?: StyleProp<TextStyle>;
//   textFont?: string;
//   onPress?: () => void;
//   iconFlex?: 'right' | 'left';
//   disable?: boolean;
// }

// const ButtonComponent = (props: Props) => {
//   const {
//     icon,
//     text,
//     textColor,
//     textStyles,
//     textFont,
//     color,
//     styles,
//     onPress,
//     iconFlex,
//     type,
//     disable,
//   } = props;

//   return type === 'primary' ? (
//     <View style={{alignItems: 'center'}}>
//       <TouchableOpacity disabled={disable} onPress={onPress}>
//         {icon && iconFlex === 'left' && icon}
//         <Text>jdgeyhwqj</Text>
//         {icon && iconFlex === 'right' && icon}
        
//       </TouchableOpacity>
//     </View>
//   ) : (
//     <TouchableOpacity onPress={onPress}></TouchableOpacity>
//   );
// };

// export default ButtonComponent;
