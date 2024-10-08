import Builder from "@repo/builder/builder";

export default async function Home() {
  console.log(
    "process.env.DATO_CMS_TOKEN",
    process.env.NEXT_PUBLIC_DATO_CMS_TOKEN
  );
  return (
    <Builder
      datoCmsToken={process.env.NEXT_PUBLIC_DATO_CMS_TOKEN || ""}
      slug="home"
    />
  );
}
