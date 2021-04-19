interface Props {
  children: any;
}

const Item = ({ children }: Props) => {
  return <div className='navbar__item'>{children}</div>;
};

export default Item;
