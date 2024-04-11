import SignupForm from "./SignupForm"

export default function SignupPage() {
  return (
    <main className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
      <div className=" sm:mx-auto sm:w-full sm:max-w-full">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Register your account
        </h2>
      </div>
      <SignupForm />
    </main>
  )
}