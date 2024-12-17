/*
  Warnings:

  - You are about to drop the column `course_id` on the `student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_course_id_fkey";

-- AlterTable
ALTER TABLE "student" DROP COLUMN "course_id";
