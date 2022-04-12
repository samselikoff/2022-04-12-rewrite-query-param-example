import { NextResponse } from "next/server";

export function middleware(req) {
  let url = req.nextUrl.clone();

  if (url.search === "") {
    url.pathname = `${url.pathname}/prerendered`;
  } else {
    url.pathname = `${url.pathname}/skeleton`;
  }

  return NextResponse.rewrite(url);
}
