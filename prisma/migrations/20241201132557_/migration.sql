/*
  Warnings:

  - You are about to alter the column `tauxPret` on the `Parametre` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `assurancePret` on the `Parametre` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Parametre" ALTER COLUMN "tauxPret" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "assurancePret" SET DATA TYPE DOUBLE PRECISION;
