import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl mb-6">Terms of Service</h1>
      <section className="mb-6">
        <h2 className="text-xl mb-4">Introduction</h2>
        <p className="leading-relaxed">
          By using any service under the domain *.jabed.dev, you agree to be
          bound by the following terms and conditions. Please read them
          carefully.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl mb-4">Account Registration</h2>
        <p className="leading-relaxed">
          To use any service under the domain *.jabed.dev, you must register
          (when needed) for an account by providing your email, name, and
          avatar. You agree to provide accurate and complete information and to
          keep this information up to date.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl mb-4">User Responsibilities</h2>
        <p className="leading-relaxed">
          As a user, you are responsible for maintaining the confidentiality of
          your account information, including your password. You are also
          responsible for all activities that occur under your account. You
          agree to notify us immediately of any unauthorized use of your
          account.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl mb-4">Acceptable Use</h2>
        <p className="leading-relaxed">
          You agree not to use all services under *.jabed.dev for any unlawful
          or prohibited activities, including but not limited to:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            Uploading or sharing illegal or unauthorized content.
          </li>
          <li className="mb-2">
            Violating any applicable laws or regulations.
          </li>
          <li className="mb-2">Infringing on the rights of others.</li>
          <li className="mb-2">
            Interfering with the operation of our services.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl mb-4">Data Security</h2>
        <p className="leading-relaxed">
          Measures are implemented to protect your data, including encryption
          and access controls. However, you acknowledge that no method of
          transmission over the internet or electronic storage is completely
          secure.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl mb-4">Termination</h2>
        <p className="leading-relaxed">
          The right to suspend or terminate your account and access to services
          under *.jabed.dev at our discretion, without notice is held, if you
          violate these terms or engage in any activity that may harm the
          services or other users.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-4">Limitation of Liability</h2>
        <p className="leading-relaxed">
          To the fullest extent permitted by law, I shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          any loss of profits or revenues, whether incurred directly or
          indirectly, or any loss of data, use, goodwill, or other intangible
          losses resulting from your use of services under *.jabed.dev.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-4">Changes to These Terms</h2>
        <p className="leading-relaxed">
          These Terms of Service may be updated from time to time. You will be
          notified of any changes by posting the new Terms of Service on the
          respective website. You are advised to review these terms periodically
          for any changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl mb-4">Contact</h2>
        <p className="leading-relaxed">
          If you have any questions or concerns about these Terms of Service,
          please contact at:
        </p>
        <p className="leading-relaxed">
          <span>Email</span>:{" "}
          <Link href="mailto:hi@jabed.dev" className="text-blue-500 underline">
            hi@jabed.dev
          </Link>
        </p>
      </section>

      <p className="leading-relaxed mt-6">
        These Terms of Service were last updated on 22th September 2024
      </p>
    </div>
  );
}
