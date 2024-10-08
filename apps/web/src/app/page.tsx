import Builder from "@repo/builder/builder";

export default async function Home() {
  return (
    <Builder
      datoCmsToken={process.env.NEXT_PUBLIC_DATO_CMS_TOKEN || ""}
      slug="home"
    />
  );
}
