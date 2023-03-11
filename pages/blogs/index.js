import React, { useEffect, useState } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";

function blogs() {
  const [posts, setPosts] = useState([]);
  const client = new ApolloClient({
    uri: "https://api.hashnode.com",
  });

  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            user(username: "jabedzaman") {
              publication {
                posts(page: 0) {
                  title
                  brief
                  slug
                  dateAdded
                  coverImage
                }
              }
            }
          }
        `,
      })
      .then((result) => setPosts(result.data.user.publication.posts));
  }, []);
  return (
    <section className="mx-auto my-3 max-w-5xl lg:px-0 px-5">
      <h1 className="lg:text-5xl md:text-2xl text-lg font-bold">Blogs</h1>
      <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
        I write blogs on Hashnode. You can find my blogs here.
      </p>
      <div>
        <ul role="list">
          {posts.reverse().map((post) => (
            <li key={post.slug} className="py-4 hover:cursor-pointer">
              <Link href={`https://blog.jabed.me/${post.slug}`}>
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{post.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      {post.dateAdded.split("T")[0]}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {!posts.length > 0 && (
          <div className="flex items-center justify-center my-10">
            <AiOutlineLoading className="animate-spin text-5xl" />
          </div>
        )}
      </div>
    </section>
  );
}

export default blogs;
