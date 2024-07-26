import prisma from "@/lib/prisma";
import ThingForm from "./components/ThingForm";

export default async function Home() {
  const things = await getThings();

  return (
    <div className="max-w-md w-full mx-auto px-4 py-8 text-center space-y-8">
      <h1 className="text-4xl font-bold text-center">Things updated by github actions again</h1>

      {things.length !== 0 && (
        <ul className="divide-y divide-gray-200">
          {things.map((thing) => {
            return (
              <li className="py-2.5" key={thing.id}>
                {thing.text}
              </li>
            );
          })}
        </ul>
      )}

      {things.length === 0 && <p>You have no things yet! Add one below.</p>}
      <ThingForm />
    </div>
  );
}

async function getThings() {
  const things = await prisma.thing.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return things;
}
