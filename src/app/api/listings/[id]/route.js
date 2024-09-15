import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from '../../../../lib/firebase';

const db = getFirestore(app);

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const docRef = doc(db, "listings", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const listing = {
        id: docSnap.id,
        ...docSnap.data(),
      };
      return new Response(JSON.stringify(listing), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: "Listing not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching listing:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch listing" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}