-- CreateTable
CREATE TABLE "Parametre" (
    "id" TEXT NOT NULL,
    "nbMoisLocParAn" TEXT,
    "dureePret" TEXT,
    "tauxPret" TEXT,
    "assurancePret" TEXT,
    "apport" TEXT,

    CONSTRAINT "Parametre_pkey" PRIMARY KEY ("id")
);
