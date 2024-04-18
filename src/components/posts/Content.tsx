import * as React from "react";
import { sora } from "~/libs";

type Props = {
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export const Content: React.FC<Props> = React.memo(({ content }) => {
  return (
    <div
      className={`${sora.className} my-5 prose-img:w-full prose-img:rounded-lg prose-lg`}
    >
      {content}
    </div>
  );
});

Content.displayName = "Content";
