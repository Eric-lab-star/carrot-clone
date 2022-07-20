interface ItemProps {
  title: string;
  price: string;
  color: string;
}

const ItemProfile = ({ title, price, color }: ItemProps) => {
  return (
    <div className="flex space-x-3">
      <div className="w-20 h-20 bg-gray-500 rounded-md" />
      <div className="py-2 flex flex-col">
        <h3 className="text-gray-900 text-sm font-medium">{title}</h3>
        <span className="text-xs text-gray-500">{color}</span>
        <span className="font-medium mt-1 text-gray-900 ">${price}</span>
      </div>
    </div>
  );
};

export default ItemProfile;
