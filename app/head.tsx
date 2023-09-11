import { FC } from "react";

interface headProps {
  params: { name: string[] };
}

const head: FC<headProps> = ({ params }) => {
  const [name] = params.name;
  console.log(name);

  return (
    <>
      <title>{name}</title>
    </>
  );
};

export default head;
