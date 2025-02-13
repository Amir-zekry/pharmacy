'use server'
import { getGuestId } from "./actions";

export default async function getUserId(session) {
    const guest_id = await getGuestId()
    if (session?.user.email) {
        return session.user.email; // Logged-in user
    }

    return guest_id // Guest user
}