/*
  Warnings:

  - The `nbMoisLocParAn` column on the `Parametre` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dureePret` column on the `Parametre` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tauxPret` column on the `Parametre` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `assurancePret` column on the `Parametre` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `apport` column on the `Parametre` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Parametre" DROP COLUMN "nbMoisLocParAn",
ADD COLUMN     "nbMoisLocParAn" INTEGER,
DROP COLUMN "dureePret",
ADD COLUMN     "dureePret" INTEGER,
DROP COLUMN "tauxPret",
ADD COLUMN     "tauxPret" DECIMAL(65,30),
DROP COLUMN "assurancePret",
ADD COLUMN     "assurancePret" DECIMAL(65,30),
DROP COLUMN "apport",
ADD COLUMN     "apport" INTEGER;
