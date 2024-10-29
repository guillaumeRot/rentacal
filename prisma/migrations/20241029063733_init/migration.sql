-- CreateTable
CREATE TABLE "suggestion" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "suggestion" TEXT NOT NULL,

    CONSTRAINT "suggestion_pkey" PRIMARY KEY ("id")
);
