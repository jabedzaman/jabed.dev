import { getProviders, useSession, signIn } from "next-auth/react";

import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const { data: session } = useSession();
  return (
    console.log(providers),
    
    (
      <div className="h-screen justify-center items-center">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))} 
      </div>
    )
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
