import Link from "next/link";
import * as React from "react";
import { bricolage, sora } from "~/libs";
import { postMetaData } from "~/libs/utils";
import { Article } from "~/types/article";
import moment from "moment";

const ArticleItem: React.FC<Article> = React.memo(({ date, slug, title }) => {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <h2 className={`${sora.className}`}>{title}</h2>
      <span className="text-xs text-[#666666]">{moment(date).format("MMMM D, YYYY")}</span>
    </Link>
  );
});

ArticleItem.displayName = "ArticleItem";

export const Articles: React.FC = React.memo(() => {
  return (
    <section>
      <h1
        className={
          bricolage.className +
          " text-2xl md:text-4xl leading-snug md:leading-tight"
        }
      >
        Articles
      </h1>
      <div className="my-4 flex flex-col gap-2">
        {postMetaData
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((post) => (
            <ArticleItem key={post.slug} {...post} />
          ))}
      </div>
    </section>
  );
});

Articles.displayName = "Articles";
