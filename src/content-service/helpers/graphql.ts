import { DocumentNode } from "@apollo/client";

import client from "../apolloClient";

export async function fetchQuery(document: DocumentNode) {
  return await client.query({ query: document });
}
