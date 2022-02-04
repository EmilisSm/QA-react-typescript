import { TextareaHTMLAttributes } from 'react';

interface TextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

export const TextArea: React.FC<TextArea> = ({ id, label, ...rest }) => (
  <div className="input-wrapper">
    <label htmlFor={id}>{label}</label>
    <textarea id={id} {...rest} />
  </div>
);
