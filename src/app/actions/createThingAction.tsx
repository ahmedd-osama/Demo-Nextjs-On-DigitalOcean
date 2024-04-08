"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function createThingAction(
  _: any,
  formData: FormData
): Promise<number> {
  // Extract data
  const text = (formData.get("text") as string) || "Untitled thing";

  // Create course
  await prisma.thing.create({ data: { text } });

  // Update data
  revalidatePath("/");

  return Date.now();
}
