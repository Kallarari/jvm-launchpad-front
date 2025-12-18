import { sleep } from "../../infrastructure/utils/sleep";
import type { ExamplePageData } from "./interface";

export async function getExamplePageData(): Promise<ExamplePageData> {
  await sleep(2000);

  return {
    name: "Example Page",
    description: "This is an example page",
    id: "1",
  };
}
