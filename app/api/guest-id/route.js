import { gettingGuestId, settingGuestId } from "@/app/actions";

export async function GET() {
    let guestId = await gettingGuestId()

    if (!guestId) {
        settingGuestId()
        guestId = await gettingGuestId()
    }

    return new Response(JSON.stringify({ guestId }), { status: 200 });
}