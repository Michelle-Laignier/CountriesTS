import { Container } from "./styles"
import { IconType } from "react-icons"

interface ButtonProps {
  icon: IconType;
  onClick?: () => void;
}

export function Button({ icon: Icon, ...rest }: ButtonProps) {
  return(
    <Container type="button" {...rest}>
      {Icon && <Icon/>}
    </Container>
  )
}