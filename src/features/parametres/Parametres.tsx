import { currentUser } from "@/auth/current-user";
import { AvatarName } from "./AvatarName";
import { ParametresParDefaut } from "./ParametresParDefaut";

export const Parametres = async () => {
  const user = await currentUser();

  return (
    <div className="h-screen w-full mx-auto max-w-3xl mt-14">
      {user?.image && user?.name ? (
        <div className="flex flex-col gap-y-8">
          <AvatarName imageUrl={user.image} name={user.name} />
          <ParametresParDefaut user={user} />
        </div>
      ) : (
        <p>Paramètres non disponibles</p>
      )}
    </div>
  );
};
