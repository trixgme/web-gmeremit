import { NextRequest, NextResponse } from "next/server";

const GME_MOBILE_API =
  "https://www.gmemobile.com/common/component/plan/AjaxPhone_plan.aspx";

export async function GET(request: NextRequest) {
  const seq = request.nextUrl.searchParams.get("seq") || "10002";

  try {
    const res = await fetch(GME_MOBILE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        header: [{ type: "02" }],
        body: [{ seq, order_type: "1", order_align: "ASC" }],
      }),
      next: { revalidate: 86400 },
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { RESULT: "N", RESULTMSG: "Failed to fetch plans", DATA: [] },
      { status: 500 }
    );
  }
}
