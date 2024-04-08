"use client";

import { useFormState, useFormStatus } from "react-dom";
import createThingAction from "../actions/createThingAction";
import { useEffect, useRef } from "react";

export default function ThingForm() {
  const [success, formAction] = useFormState(createThingAction, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (success) {
      formRef.current?.reset();
    }
  }, [success]);

  return (
    <form ref={formRef} action={formAction}>
      <div className="flex gap-2.5">
        <input
          className="border border-gray-200 font-semibold  font-weight px-5 py-2.5 rounded"
          type="text"
          name="text"
          placeholder="Type some text"
        />
        <ThingFormSubmit />
      </div>
    </form>
  );
}

function ThingFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-500 border border-blue-500 font-semibold text-white font-weight px-5 py-2.5 rounded"
      disabled={pending}
      type="submit"
    >
      Create
    </button>
  );
}
