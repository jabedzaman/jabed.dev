import { collection, getDocs, orderBy, query } from "firebase/firestore";
import * as React from "react";
import { db } from "~/firebase";
import moment from "moment";

export const List: React.FC = React.memo(async () => {
  const signatures = await getDocs(
    query(collection(db, "signatures"), orderBy("created_at", "desc"))
  );
  const docs = signatures.docs.map((doc) => {
    return {
      id: doc.id,
      name: doc.data().name,
      created_at: doc.data().created_at.toDate().toISOString(),
      message: doc.data().message,
    };
  }) as { id: string; message: string; name: string; created_at: string }[];
  return (
    <div className="my-5">
      {docs.map((doc) => {
        return (
          <div key={doc.id} className="my-6">
            <p className="text-sm text-[#666666]">
              <span>{doc.name}</span>
              <span> </span>
              <span className="text-xs">
                ({moment(doc.created_at).fromNow()})
              </span>
            </p>
            <p>{doc.message}</p>
          </div>
        );
      })}
    </div>
  );
});

List.displayName = "List";
