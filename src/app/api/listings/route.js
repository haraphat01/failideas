import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { app } from '../../../lib/firebase';

const db = getFirestore(app);

export async function GET() {
  try {
    const q = query(collection(db, "listings"), where("status", "==", "approved"));
    const querySnapshot = await getDocs(q);
    const listings = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(listings), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching listings:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch listings" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
