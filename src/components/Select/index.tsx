import * as React from 'react';
import { solidArrow } from '../../util/icons';
import { SectionWrapper, Wrapper, Label, Arrow, StyledSelect } from './styles';

export interface Option {
  label?: string;
  value?: string;
}

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options?: Option[];
  handler?: (value: string) => any;
}

const Select: React.FunctionComponent<Props> = ({
  required = false,
  disabled = false,
  label,
  options,
  handler,
  children,
  ...restProps
}) => {
  return (
    <SectionWrapper>
      <Wrapper>
        <Label>
          {label}
          <Arrow>{solidArrow}</Arrow>
          <StyledSelect
            required={required}
            {...restProps}
            onChange={(e: any) => {
              e.preventDefault();
              if (!!handler) handler(e.target.value);
            }}
          >
            {children}
            {(options || []).map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        </Label>
      </Wrapper>
    </SectionWrapper>
  );
};

export default Select;
