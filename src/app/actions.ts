"use server";

// This file is intentionally left with its original content.
// The form submission logic has been moved to the client-side
// in `src/components/help-form.tsx` to support static export.
// This file is no longer used for form submission.

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const leadSchema = z.object({
  name: z.string(),
  phone: z.string(),
  model: z.string(),
  trim: z.string(),
  price: z.number(),
});

export async function saveLead(data: z.infer<typeof leadSchema>) {
  try {
    const validatedData = leadSchema.parse(data);

    await addDoc(collection(db, "leads"), {
      ...validatedData,
      createdAt: serverTimestamp(),
    });

    return { success: true };
  } catch (error) {
    let errorMessage = "An unknown error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    console.error("Error saving lead to Firestore:", error);
    return { success: false, error: errorMessage };
  }
}
