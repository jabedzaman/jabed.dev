import { collection, getDocs, orderBy, query } from "firebase/firestore";
import * as React from "react";
import { db } from "~/firebase";
import moment from "moment";

export const List: React.FC = React.memo(async () => {
  const signatures = await getDocs(
    query(collection(db, "signatures"), orderBy("created_at", "desc"))
  );
  const docs = signatures.docs.map((doc) => {
    return doc.data();
  }) as { id: string; message: string; name: string; created_at: Date }[];
  console.log(docs);
  return (
    <div className="my-5">
      {docs.map((doc) => {
        return (
          <div key={doc.id} className="my-2">
            <p className="text-sm text-[#666666]">{doc.name}</p>
            <p>{doc.message}</p>
          </div>
        );
      })}
    </div>
  );
});

List.displayName = "List";
