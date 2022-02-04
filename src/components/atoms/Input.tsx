import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ id, label, ...rest }) => (
  <div className="input-wrapper">
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
  </div>
);
