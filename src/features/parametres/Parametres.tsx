// "use client";

import { currentUser } from "@/auth/current-user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarName } from "./AvatarName";

export const Parametres = async () => {
  const user = await currentUser();
  console.log("TEST GUI:", user);

  return (
    <div className="h-screen w-full mx-auto max-w-3xl mt-14">
      {user?.image && user?.name ? (
        <div className="flex flex-col gap-y-8">
          <AvatarName imageUrl={user.image} name={user.name} />
          <h1 className="text-2xl">Paramètres par défaut</h1>
          <div className="flex flex-col lg:flex-row gap-y-8 gap-x-4">
            <Card className="rounded-3xl w-1/2 max-h-32">
              <CardHeader>
                <CardTitle>Achat</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl">TEST</CardContent>
            </Card>
            <Card className="rounded-3xl w-1/2 max-h-32">
              <CardHeader>
                <CardTitle>Achat 2</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl">TEST</CardContent>
            </Card>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-8 gap-x-4">
            <Card className="rounded-3xl w-1/2 max-h-32">
              <CardHeader>
                <CardTitle>Achat 3</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl">TEST</CardContent>
            </Card>
            <Card className="rounded-3xl w-1/2 max-h-32">
              <CardHeader>
                <CardTitle>Achat 4</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl">TEST</CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <p>Paramètres non disponibles</p>
      )}
    </div>
  );
};
