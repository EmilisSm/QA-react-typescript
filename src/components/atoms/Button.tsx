interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  btnStyle: 'sort' | 'remove' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ btnStyle, ...rest }) => (
  <button className={`btn-${btnStyle}`} {...rest} />
);
