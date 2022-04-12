import { useRouter } from "next/router";

export default function TemplatePage() {
  let router = useRouter();

  function changeQuery() {
    let url = new URL(window.location.href);
    let params = url.searchParams;

    if (params.has("q")) {
      params.delete("q");
    } else {
      params.append("q", "1");
    }

    router.push(url.toString());
  }

  return (
    <div>
      <button onClick={changeQuery}>Change query param</button>
      <p>Show all templates</p>
    </div>
  );
}
