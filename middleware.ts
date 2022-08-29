import {
  NextRequest,
  NextFetchEvent,
  userAgent,
  NextResponse,
  NextMiddleware,
} from "next/server";
export function middleware(req: NextRequest) {
  if (req.cookies.get("carrotsession")) {
    const url = req.nextUrl.clone();
    url.pathname = "/enter";
    const res = NextResponse;
    res.rewrite(url);
  }
}
