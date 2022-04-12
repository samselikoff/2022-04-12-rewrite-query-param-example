import { NextResponse } from "next/server";

let allowedParams = ["allowed"];

export function middleware(req) {
  let url = req.nextUrl.clone();
  // let changed = false;

  if (url.search === "") {
    url.pathname = `${url.pathname}/prerendered`;
  } else {
    url.pathname = `${url.pathname}/skeleton`;
  }

  return NextResponse.rewrite(url);
  // url.searchParams.forEach((_, key) => {
  //   if (!allowedParams.includes(key)) {
  //     url.searchParams.delete(key);
  //     changed = true;
  //   }
  // });

  // Avoid infinite loop by only redirecting if the query
  // params were changed
  // if (changed) {
  //   return NextResponse.redirect(url);
  //   // It's also useful to do a rewrite instead of a redirect
  //   // return NextResponse.rewrite(url)
  // }
}
