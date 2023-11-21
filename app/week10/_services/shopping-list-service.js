import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


async function getItems(userId) {
    const items = [];

    // Query the items subcollection for the specific user
    const q = query(collection(db, `users/${userId}/items`));

    // Retrieve the documents from the items subcollection
    const querySnapshot = await getDocs(q);

    // Iterate over the documents and add them to the items array
    querySnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            data: doc.data(),
        });
    });

    return items;
}

async function addItem(userId, item) {
    // Reference the items subcollection for the specific user
    const itemsRef = collection(db, `users/${userId}/items`);

    // Add the item to the items subcollection
    const docRef = await addDoc(itemsRef, item);

    // Return the id of the newly created document
    return docRef.id;
}

export { getItems, addItem };