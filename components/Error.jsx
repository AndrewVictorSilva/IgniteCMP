import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from "@chakra-ui/react";

/**
 *
 * @param {{
 *     title: string
 *     message: string
 *     isVisible: boolean
 *     onClose: () => void
 * }} props
 * @returns
 */
export function Error(props) {
  return (
    props.isVisible && (
      <Alert
      status="error"
      alignItems='center'
      justifyContent='center'
      textAlign='center'>
        <AlertIcon />
        <Box flex='1'>
          <AlertTitle>{props.title}</AlertTitle>
          <AlertDescription>{props.message}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={props.onClose}
        />
      </Alert>
    )
  );
}
