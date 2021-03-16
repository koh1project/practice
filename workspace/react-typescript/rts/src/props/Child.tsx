interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>CLick me</button>
    </div>
  );
};

export const ChildAsFc: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>CLick me</button>
    </div>
  );
};
