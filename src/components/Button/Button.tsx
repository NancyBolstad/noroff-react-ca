import { Button } from './styles';

type Size = 'small' | 'medium' | 'large';
type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

export interface ButtonProps {
  size: Size;
  variant: Variant;
}

const ButtonExternal = Button.withComponent('a');
const ButtonInput = Button.withComponent('input');

export default Button;
export { ButtonExternal, ButtonInput };
