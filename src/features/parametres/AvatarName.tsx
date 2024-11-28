import { Avatar, AvatarImage } from "@/components/ui/avatar";

export type AvatarNameProps = {
  imageUrl?: string;
  name?: string;
};

export const AvatarName = (props: AvatarNameProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <Avatar style={{ width: "100px", height: "100px", borderRadius: "50%" }}>
        <AvatarImage
          src={props.imageUrl}
          alt={`${props.name ?? "-"}'s profile picture`}
        />
      </Avatar>
      <h1 className="text-4xl pl-10">{props.name}</h1>
    </div>
  );
};
