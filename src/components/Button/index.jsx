import P from 'prop-types';

export const Button = ({children,onButtonClick,disabled = false}) =>
{
  return (
    <button onClick ={onButtonClick} disabled={disabled}>{children}</button>
  )
}
Button.propTypes =
{
children: P.node.isRequired,
onButtonClick: P.func.isRequired,
disabled: P.bool,
}
