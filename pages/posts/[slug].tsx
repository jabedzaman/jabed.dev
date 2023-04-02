import fs from "fs";
import path from "path";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import { POSTS_PATH, postFilePaths } from "../../lib/mdxUtils";
import "highlight.js/styles/atom-one-dark.css";
import { collection, doc, query, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useSession, signIn } from "next-auth/react";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";

export default function Blog({ source }: any) {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const [likes, setLikes] = useState<string[]>([]);
  const [liked, setLiked] = useState<Boolean>(false);
  const title = source.frontmatter.title;
  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === title) {
          setLikes(doc.data().likes);
        }
      });
    });
    return unsubscribe;
  }, [title]);
  useEffect(() => {
    if (likes.includes(userEmail as string)) {
      setLiked(true);
    }
  }, [likes, userEmail]);
  async function likePost() {
    if (session) {
      if (liked) {
        try {
          setLiked(false);
          await setDoc(doc(db, "posts", title), {
            likes: likes.filter((like) => like !== userEmail),
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          setLiked(true);
          await setDoc(doc(db, "posts", title), {
            likes: [...likes, userEmail],
          });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert("Please login to like this post");
    }
  }
  return (
    <article className="max-w-5xl li prose-a:no-underline prose-a:font-bold   prose-a:text-[#00B6FE]  mx-auto prose  dark:prose-pre:border-[#0D1117] lg:prose-xl dark:prose-invert prose-pre:border prose-pre:p-0 lg:prose-pre:p-0 prose-pre:bg-[#FFFFFF] dark:prose-pre:bg-[#0D1117]">
      <Head>
        <title>{source.frontmatter.title}</title>
        <meta name="description" content={source.frontmatter.description} />
        <meta name="og:title" content={source.frontmatter.title} />
        <meta name="og:description" content={source.frontmatter.description} />
        <meta name="og:image" content={source.frontmatter.image} />
        <meta name="keywords" content={source.frontmatter.tags} />
      </Head>
      <header>
        <h1 className="text-4xl font-bold">{source.frontmatter.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {source.frontmatter.date}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {source.frontmatter.description}
        </p>
        <Suspense fallback={<div className="w-full h-16 border dark:bg-gray-600 bg-gray-200"/>}>
          <Image
            width={1000}
            height={500}
            src={source.frontmatter.image}
            alt={source.frontmatter.title}
          />
        </Suspense>
      </header>
      <MDXRemote {...source} />
      <hr />
      <div className="bottom-5 sticky mx-auto flex justify-center items-center">
        <div
          className={`border rounded-3xl shadow-lg  px-5 py-2  bg-white dark:bg-[#121212] flex flex-row items-center space-x-2 cursor-pointer md:hover:scale-105 duration-150 ease-in-out 
          ${
            liked
              ? "border-blue-400 dark:border-blue-300"
              : "border-gray-300 dark:border-gray-500"
          }
          ${likes?.length < 10 ? "justify-between" : "justify-center"}
          `}
        >
          <div
            onClick={() => {
              if (session) {
                likePost();
              } else {
                signIn("google");
              }
            }}
          >
            {" "}
            {liked ? (
              <AiFillHeart className="text-2xl text-red-500" />
            ) : (
              <AiOutlineHeart className="text-2xl text-gray-500" />
            )}
          </div>
          <div> {likes?.length}</div>
          <div className="text-gray-500">|</div>
          <div className="pr-2">
            <AiOutlineComment className="text-2xl text-gray-500 cursor-not-allowed" />
          </div>
        </div>
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  const paths = postFilePaths
    .map((path: any) => path.replace(/\.mdx?$/, ""))
    .map((slug: any) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  // const stats = readingTime(source);
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return { props: { source: mdxSource } };
}
