/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Parametre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Parametre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Parametre" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Parametre_userId_key" ON "Parametre"("userId");

-- AddForeignKey
ALTER TABLE "Parametre" ADD CONSTRAINT "Parametre_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
